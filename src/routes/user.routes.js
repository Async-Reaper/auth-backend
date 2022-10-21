const Router = require("express");
const router = new Router();
const userController = require("../controllers/user.controller");

router.post("/user/create_user", userController.createUser);
router.get("/user/get_user_info/:id", userController.getUser);
router.delete("/user/delete_user/:id", userController.deleteUser);

module.exports = router;
