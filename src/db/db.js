const Pool = require("pg");
const pool = new Pool({
  user: "postgres",
  password: "Ikd12213443",
  host: "localhost",
  port: 5432,
  database: "todo_list",
});
