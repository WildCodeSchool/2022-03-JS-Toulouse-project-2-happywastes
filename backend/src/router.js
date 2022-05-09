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

router.post("/api/user/:mail", cors(corsOptions), (request, response) => {
  const { mail } = request.params;
  connexion.query(
    `SELECT * FROM user WHERE email = ?`,
    [mail],
    (error, result) => {
      if (error) {
        response.status(500).send(error);
      } else if (result.length !== 0) {
        response.status(200).json(result);
      } else {
        response.status(404).send(error);
      }
    }
  );
});

router.post("/api/create/user", cors(corsOptions), (request, response) => {
  const { firstName, lastName, email, avatarUrl, password, favourites } =
    request.body;
  connexion.query(
    `INSERT INTO user (firstName, lastName, email, avatar_url, password, favourites) VALUES ( ?, ?, ?, ?, ?, ?)`,
    [firstName, lastName, email, avatarUrl, password, favourites],
    (error, result) => {
      if (error) {
        response.status(500).send(`Error: ${error}`);
      } else {
        response.status(200).send(result);
      }
    }
  );
});

module.exports = router;
