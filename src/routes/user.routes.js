const Router = require("express");
const router = new Router();
const userController = require("../controllers/user.controller");

router.post("/user", userController.createUser);
router.get("/user", userController.getUser);
router.delete("/user", userController.deleteUser);

module.exports = router;
