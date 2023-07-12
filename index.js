const express = require("express");
const app = express();
const router = require("./routes");

app.use("/", router);

app.listen(3000, (req, res) => {
  console.log("servidor corriendo en puerto 3000");
});
