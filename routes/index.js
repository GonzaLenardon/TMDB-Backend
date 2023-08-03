const express = require("express");
const router = express.Router();
const controllersUser = require("../controllers/User");

router.get("/user/:id", controllersUser.getUser);

router.post("/user", controllersUser.addUser);

/* router.get("/user", (req, res) => {
  User.findAll().then((res) => res.send(res));
});



router.delete("/user/:id", (req, res) => {
  const { id } = req.params;
 
  User.destroy({ where: { id } }).then((resp) => res.send("User deleted"));
});
 */

module.exports = router;
