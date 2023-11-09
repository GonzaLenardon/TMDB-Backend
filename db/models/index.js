const User = require("./User");
const Favorites = require("./Favorites");

Favorites.belongsTo(User);

module.exports = { User, Favorites };
