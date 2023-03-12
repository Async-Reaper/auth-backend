const Pool = require("pg").Pool;
const pool = new Pool({
  user: "user",
  password: "kjDJBOx4zQSA8nhbtDD70Y15B5XVgGZ0",
  host: "dpg-cg6snjt269v5l67c5c40-a",
  port: 5432,
  database: "posts_en5p",
});

module.exports = pool;
