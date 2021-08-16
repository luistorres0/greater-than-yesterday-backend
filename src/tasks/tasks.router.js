const router = require("express").Router();
const controller = require("./tasks.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/:task_id").get(controller.read).delete(controller.delete).all(methodNotAllowed);

router.route("/").post(controller.create).get(controller.list).all(methodNotAllowed);


module.exports = router;