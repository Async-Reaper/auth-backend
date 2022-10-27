const db = require("../db/db");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { secret } = require("../configs/configKey");

const generateAccesToken = (id, name, surname, email, login) => {
  const payload = {
    id,
    name,
    surname,
    email,
    login,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class AuthController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Возникла ошибка", errors });
      }
      const { name, surname, email, login, password } = req.body;
      const candidate = await db.query("SELECT * FROM users WHERE login = $1", [
        login,
      ]);

      if (candidate.rows[0]) {
        return res.status(400).json({
          message: "Пользователь с таким именем уже зарегистирован",
        });
      }

      const hashPassword = bcrypt.hashSync(password, 8);
      const newUser = await db.query(
        "INSERT INTO users (name, surname, email, login, password) VALUES ($1, $2, $3, $4, $5) RETURNING * ",
        [name, surname, email, login, hashPassword]
      );
      res.json({ message: "Регистрация прошла успешно" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Ошибка регистрации" });
    }
  }

  async login(req, res) {
    try {
      const { login, password } = req.body;
      const user = await db.query("SELECT * FROM users WHERE login = $1", [
        login,
      ]);

      if (!user.rows[0]) {
        return res.status(400).json("Пользователь не найден");
      }

      const validPassword = bcrypt.compareSync(password, user.rows[0].password);

      if (!validPassword) {
        return res.status(400).json({ message: "Неверный пароль" });
      }
      const token = generateAccesToken(
        user.rows[0].id,
        user.rows[0].name,
        user.rows[0].surname,
        user.rows[0].email,
        user.rows[0].login
      );
      return res.json({ token });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Ошибка авторизации" });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await db.query("SELECT * FROM users");
      res.json(users.rows);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new AuthController();
