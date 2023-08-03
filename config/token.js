const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET;
console.log("secrettt", secret);

const generateToken = (payload) => {
  return (token = jwt.sign({ user: payload }, secret, { expiresIn: "2h" }));
};

const validateToken = (token) => {
  return jwt.verify(token, secret);
};

module.exports = { generateToken, validateToken };
