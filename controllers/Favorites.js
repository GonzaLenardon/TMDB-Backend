const { Favorites, User } = require("../models");

const addFavorite = (req, res) => {
  const { email } = req.body;
  const Movie = req.params.id;

  User.findOne({ where: { email } }).then((user) => {
    if (user) {
      Favorites.findOne({
        where: { userId: user.id, Movie: Movie },
      }).then((rex) => {
        if (!rex) {
          Favorites.create({ Movie })
            .then((favorite) => {
              favorite.setUser(user);
              res.send(201);
              //res.status(201).send(favorite);
              console.log("agregamos favoritos");
            })
            .catch((erro) => console.log("Dio un errorororor", erro));
        } else {
          res.send(204);
          console.log("ya existe este movie en favoritos");
        }
      });
    }
  });
};

const allFavorites = (req, res) => {
  const email = req.params.email;
  User.findOne({ where: { email } })
    .then((result) => {
      const userId = result.id;

      Favorites.findAll({ where: { userId } })
        .then((movies) => {
          res.status(200).send(movies);
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
};

module.exports = { addFavorite, allFavorites };
