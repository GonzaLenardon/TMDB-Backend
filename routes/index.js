const express = require("express");
const router = express.Router();
const axios = require("axios");

//45487d7530b9a32f1234012f8cb58526

router.get("/api/peliculas", (req, res) => {
  res.send("estamos en la ruta /peliculas");
});

module.exports = router;
