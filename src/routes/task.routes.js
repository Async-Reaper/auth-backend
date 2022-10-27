const Router = require("express");
const router = new Router();
const tasksConroller = require("../controllers/task.controller");

router.post("/create_task", tasksConroller.createTask);
router.get("/get_tasks_user", tasksConroller.getTasksUser);
router.get("/get_task_info/:id", tasksConroller.getTask);
router.delete("/delete_task/:id", tasksConroller.deleteTask);

module.exports = router;
