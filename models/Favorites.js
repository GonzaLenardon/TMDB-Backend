const sq = require("sequelize");
const db = require("./_db.js");

class Favorites extends sq.Model {}

Favorites.init(
  {
    idMovie: { type: sq.INTEGER },
  },
  { sequelize: db, modelName: "favorites" }
);

module.exports = Favorites;
