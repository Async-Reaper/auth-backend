const db = require("../db/db");

class TasksController {
  async createTask(req, res) {
    const { title, content, user_id } = req.body;

    const user = await db.query(
      "INSERT INTO tasks (status, title, content, date_from, date_to, type, compexity, user_id) VALUES ('Active', $1, $2, '01.01.2021', '01.02.2021', 'Home', 5, $3) RETURNING * ",
      [title, content, user_id]
    );
    res.json(user.rows[0]);
  }

  async getTask(req, res) {
    const id = req.params.id;
    const user = await db.query("SELECT * FROM tasks WHERE id = $1", [id]);
    res.json(user.rows[0]);
  }

  async getAllTask(req, res) {
    const user = await db.query("SELECT * FROM todos");
    res.json(user)
  }

  async getTasksUser(req, res) {
    const id = req.query.id;
    const user = await db.query("SELECT * FROM tasks WHERE user_id = $1", [id]);
    res.json(user.rows);
  }

  async deleteTask(req, res) {
    const id = req.params.id;
    const user = await db.query(
      "DELETE FROM tasks WHERE id = $1 RETURNING * ",
      [id]
    );
    res.json(user.rows[0]);
  }

  async test(req, res) {
    res.json("work");
  }
}

module.exports = new TasksController();
