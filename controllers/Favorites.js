const { Favorites, User } = require("../models");

const addFavorite = (req, res) => {
  const { email } = req.body;
  const Movie = req.params.id;

  User.findOne({ where: { email } }).then((user) => {
    if (user) {
      Favorites.create({ Movie })
        .then((favorite) => {
          favorite.setUser(user);
          res.status(201).send(favorite);
        })
        .catch((erro) => console.log(erro));
    }
  });
};

/* const delFavorite = (req, res) => {
  const { email } = req.body;
  const Movie = req.params.id;

 User.findOne({ where: { email } }).then((user) => {
    if (user) {
      Favorites.destroy({ where:   })
        .then((favorite) => {
          favorite.setUser(user);
          res.status(201).send(favorite);
        })
        .catch((erro) => console.log(erro));
    }
  });
}; */

const allFavorites = (req, res) => {
  const email = req.params.email;
  User.findOne({ where: { email } })
    .then((result) => {
      const userId = result.id;
      console.log("este es usuiario", userId);

      Favorites.findAll({ where: { userId } })
        .then((movies) => {
          res.status(200).send(movies);
          console.log("adfadsfadsfadfsadff", movies);
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
};

module.exports = { addFavorite, allFavorites };
