require("dotenv").config();
// const { application } = require("express");
const express = require("express");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const mysql = require("mysql2");

const router = express.Router();

const connexion = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

connexion.connect((error) => {
  if (error) {
    console.error(error);
  } else {
    console.warn("Bien joué");
  }
});

router.get("/api/users", (request, response) => {
  connexion.query("SELECT * FROM user", (error, result) => {
    if (error) {
      response.status(404).send(error);
    } else {
      response.status(200).json(result);
    }
  });
});

router.post("/api/user/create", cors(corsOptions), (request, response) => {
  const { firstName, lastName, email, avatarUrl, password, favourites } =
    request.body;
  connexion.query(
    `INSERT INTO user (firstName, lastName, email, avatar_url, password, favourites) VALUES (?, ?, ?, ?, ?, ?)`,
    [firstName, lastName, email, avatarUrl, password, favourites],
    (error, result) => {
      if (error) {
        response.status(500).send(`Error: ${error}`);
      } else {
        response
          .status(200)
          .send(`User successfully created with credentials: ${result}`);
      }
    }
  );
});

module.exports = router;
