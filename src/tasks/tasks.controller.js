const service = require("./tasks.service");

const hasProperties = require("../errors/hasProperties");

const hasRequiredProperties = hasProperties("title", "user_id");

const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const VALID_PROPERTIES = ["title", "user_id"];

function hasOnlyValidProperties(req, res, next) {
  const { data = {} } = req.body;

  const invalidFields = Object.keys(data).filter(
    (field) => !VALID_PROPERTIES.includes(field)
  );

  if (invalidFields.length) {
    return next({
      status: 400,
      message: `Invalid field(s): ${invalidFields.join(", ")}`,
    });
  }
  next();
}

async function taskExists(req, res, next) {
  const task = await service.read(req.params.task_id);
  if (task) {
    res.locals.task = task;
    return next();
  }
  next({ status: 404, message: `Task cannot be found.` })
}

async function read(req, res, next) {
  res.status(201).json({ data: res.locals.task });
}

async function create(req, res) {
  const data = await service.create(req.body.data);
  res.status(201).json({ data });
}

async function destroy(req, res) {
  const { task } = res.locals;
  await service.delete(task.task_id);
  res.sendStatus(204);
}

async function list(req, res, next) {
    const data = await service.list();
    res.json({data});
}

module.exports = {
  create: [hasOnlyValidProperties, hasRequiredProperties, asyncErrorBoundary(create)],
  delete: [asyncErrorBoundary(taskExists), asyncErrorBoundary(destroy)],
  read: [asyncErrorBoundary(taskExists), asyncErrorBoundary(read)],
  list: asyncErrorBoundary(list)
};
