// const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: "user",
//   password: "kjDJBOx4zQSA8nhbtDD70Y15B5XVgGZ0",
//   host: "postgres://",
//   port: 5432,
//   database: "posts_en5p",
// });
//
// module.exports = pool;

const pgp = require("pg-promise")();
const pool = pgp("postgres://user:kjDJBOx4zQSA8nhbtDD70Y15B5XVgGZ0@dpg-cg6snjt269v5l67c5c40-a.oregon-postgres.render.com/posts_en5p?ssl=true");
module.exports = pool
