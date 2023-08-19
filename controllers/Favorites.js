const { Favorites, User } = require("../models");

const addFavorite = (req, res) => {
  const { email } = req.body;
  const Movie = req.params.id;

  console.log(
    "moviesssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
    Movie
  );

  User.findOne({ where: { email } }).then((user) => {
    if (user) {
      console.log("paso x aca");

      Favorites.create({ Movie })
        .then((favorite) => {
          favorite.setUser(user);
          res.status(201).send(favorite);
        })
        .catch((erro) => console.log(erro));
    }
  });
};

const delFavorite = (req, res) => {};
module.exports = { addFavorite };
