const pgp = require("pg-promise")();
require("dotenv").config();

// for local db
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
};

// for deployment using ElephantSQL comment the cn variable above out and comment the cn variable below in
// const cn = process.env.CONNECTION_STRING;

const db = pgp(cn);
//****PASTED HERE: KEEP OR DELETE??? */
// db.connect()
//   .then((cn) => {
//     const { user, host, port, database } = cn.client;
//     console.log(
//       `Postgres connection established with user:\x1b[33m${user}\x1b[0m, host:\x1b[33m${host}\x1b[0m, port:\x1b[33m${port}\x1b[0m, 
//       password:\x1b[33m${password}\x1b[0m,
//       database:\x1b[33m${database}\x1b[0m`
//     );
//     cn.done();
//   })
//   .catch((error) => console.log("database connection error", error));

module.exports = db;
