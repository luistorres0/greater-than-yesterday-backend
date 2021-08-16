const service = require("./tasks.service");

const hasProperties = require("../errors/hasProperties");

const hasRequiredProperties = hasProperties("title", "user_id");

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

function taskExists(req, res, next) {
  service
    .read(req.params.task_id)
    .then((task) => {
      if (task) {
        res.locals.task = task;
        return next();
      }
      next({ status: 404, message: `task cannot be found.` });
    })
    .catch(next);
}

function read(req, res, next) {
    service
    .read(req.params.task_id)
    .then((data) => res.status(201).json({ data }))
    .catch(next);
}

function create(req, res, next) {
  service
    .create(req.body.data)
    .then((data) => res.status(201).json({ data }))
    .catch(next);
}

function destroy(req, res, next) {
  service
    .delete(res.locals.task.task_id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

function list(req, res, next) {
    service.list()
    .then((data) => res.status(201).json({ data }));
}

module.exports = {
  create: [hasOnlyValidProperties, hasRequiredProperties, create],
  delete: [taskExists, destroy],
  read: [taskExists, read],
  list
};
