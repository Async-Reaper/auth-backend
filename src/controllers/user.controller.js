const db = require("../db/db");

class UserController {
  async createUser(req, res) {
    const { name, password } = req.body;

    const user = await db.query(
      "INSERT INTO users (name, password, level, count_finished_tasks, count_nofinished_tasks, status_user) VALUES ($1, $2, 0, 0, 0, 'Новичок') RETURNING * ",
      [name, password]
    );
    res.json(user.rows[0]);
  }

  async getUser(req, res) {
    const id = req.params.id;
    const user = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    res.json(user.rows[0]);
  }

  async deleteUser(req, res) {
    const id = req.params.id;
    const user = await db.query(
      "DELETE FROM users WHERE id = $1 RETURNING * ",
      [id]
    );
    res.json(user.rows[0]);
  }
}

module.exports = new UserController();
