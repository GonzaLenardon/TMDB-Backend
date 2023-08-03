const { User } = require("../models");

const getUser = (req, res) => {
  const { id } = req.params;
  User.findOne({ where: { id } }).then((user) => res.status(200).send(user));
};

const addUser = (req, res) => {
  const { email } = req.body;
  try {
    User.findOne({ where: { email } }).then((exist) => {
      if (exist) {
        res.status(404).send("el usuario ya esta registrado");
      } else {
        User.create(req.body).then((user) => res.status(201).send(user));
      }
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { addUser, getUser };
