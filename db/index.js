const Sequelize = require("sequelize");

/* config local  
const db = new Sequelize("tmdb", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});
 */
const db = new Sequelize(
  "postgrestmdb",
  "postgrestmdb_user",
  "D6BruXxaRDMpd7URxQtNT0wbE13xkJHq",
  {
    host: "dpg-cl54l2al7jac73cc3nlg-a",
    dialect: "postgres",
    logging: false,
  }
);

module.exports = db;
