const sq = require("sequelize");
const db = require("../index.js");
const bc = require("bcrypt");

class User extends sq.Model {
  createHash(pass, salt) {
    return bc.hash(pass, salt);
  }

  validatePass(pass) {
    return this.createHash(pass, this.salt).then(
      (newHash) => newHash === this.pass
    );
  }
}
User.init(
  {
    name: { type: sq.STRING, allowNull: false },
    email: {
      type: sq.STRING,
      validate: { isEmail: true },
      allowNull: false,
    },
    pass: { type: sq.STRING, allowNull: false },
    salt: { type: sq.STRING },
  },

  { sequelize: db, modelName: "user" }
);

User.addHook("beforeCreate", (user) => {
  const salt = bc.genSaltSync();
  user.salt = salt;

  return user
    .createHash(user.pass, user.salt)
    .then((result) => (user.pass = result))
    .catch((error) => console.log(error));
});

module.exports = User;
