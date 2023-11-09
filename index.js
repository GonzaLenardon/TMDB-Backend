const express = require("express");
const app = express();
const router = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const db = require("./models/_db");

require("dotenv").config();

const port = process.env.PORT || 3000;

app.set("port", port);

app.use(
  cors({
    /*     origin: "http://localhost:5173",
     */
    origin: "https://tmdb-xi-seven.vercel.app",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

db.sync({ force: false })

  .then(() => {
    app.listen(app.get("port"), () =>
      console.log(`Servidor escuchando en el puerto ${app.get("port")}`)
    );
  })
  .catch(console.error);
