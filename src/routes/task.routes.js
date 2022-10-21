const Router = require("express");
const router = new Router();
const tasksConroller = require("../controllers/task.controller");

router.post("/task/create_task", tasksConroller.createTask);
router.get("/task/get_tasks_user", tasksConroller.getTasksUser);
router.get("/task/get_task_info/:id", tasksConroller.getTask);
router.delete("/task/delete_task/:id", tasksConroller.deleteTask);

module.exports = router;
