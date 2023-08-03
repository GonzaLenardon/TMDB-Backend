const { User } = require("../models");
const { generateToken, validateToken } = require("../config/token");

const UserId = (req, res) => {
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

const login = (req, res) => {
  const { email, pass } = req.body;
  User.findOne({ where: { email } }).then((user) => {
    if (!user)
      return res.status(401).send(`la cuenta  ${email} no esta registrador`);

    user.validatePass(pass).then((isValid) => {
      if (!isValid) return res.status(401).send("wrong password");

      const payload = {
        name: user.name,
        email: user.email,
      };

      const token = generateToken(payload);
      res.cookie("Token ", token);
      res.send(payload);
    });
  });
};

const getUser = (req, res) => {
  const token = req.cookies.Token;
  if (!token) return res.status(401).send("Session expirada");

  const { user } = validateToken(token);
  if (!user) return res.status(401);

  res.send(user);
};

module.exports = { addUser, getUser, login };
