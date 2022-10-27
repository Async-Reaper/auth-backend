const Router = require("express");
const router = new Router();
const authController = require("../controllers/auth.contoller");
const { check } = require("express-validator");

router.post(
  "/registration",
  [
    check("login", "Имя пользователя не может быть пустым").notEmpty(),
    check("password", "Пароль должен быть больше 8 символов").isLength({
      min: 8,
    }),
    check("email", "Email не валиден").isEmail(),
  ],
  authController.registration
);
router.post("/login", authController.login);
router.get("/users", authController.getUsers);

module.exports = router;
