const Router = require("express");
const router = new Router();
const tasksConroller = require("../controllers/task.controller");

router.post("/create_task", tasksConroller.createTask);
router.get("/get_tasks_user", tasksConroller.getTasksUser);
router.get("/get_task_info/:id", tasksConroller.getTask);
router.delete("/delete_task/:id", tasksConroller.deleteTask);
router.get('/get_all_tasks', tasksConroller.getAllTask)
router.get('/test', tasksConroller.test)
module.exports = router;
