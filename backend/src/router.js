require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const nodeMailler = require("./mailler");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

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

// Check if user is stored in database
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

// Create User infos from connection form
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
        nodeMailler(firstName, lastName, email);
        response.status(200).send(result);
      }
    }
  );
});

// Store avatar url in database
router.put("/api/avatar/create", (request, response) => {
  const { avatarLink } = request.body;
  connexion.query(
    `UPDATE user SET avatar_url = ? WHERE id = 1`,
    [avatarLink],
    (error, result) => {
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(200).send(result);
      }
    }
  );
});

// Get User infos with his ID
router.get("/api/users/:id", (request, response) => {
  const { id } = request.params;
  connexion.query("SELECT * FROM user WHERE id = ?", [id], (error, result) => {
    if (error) {
      response.status(404).send(error);
    } else {
      response.status(200).json(result[0]);
    }
  });
});

// FAVOURITES ROUTES
router.get("/api/favourites/:userID", (req, res) => {
  const { userID } = req.params;
  connexion.query(
    "SELECT favourites FROM user WHERE id = ?",
    [userID],
    (error, result) => {
      if (error) {
        res.status(400).send(error);
      } else {
        res.status(200).send(result.map((el) => JSON.parse(el.favourites)));
      }
    }
  );
});

router.post("/api/favourites/:userID", (req, res) => {
  const { userID } = req.params;
  const data = req.body;
  connexion.query(
    "SELECT favourites FROM user WHERE id = ?",
    [userID],
    (error, result) => {
      if (error) {
        res.status(400).send(error);
      } else {
        let favourites = [];
        if (result[0].favourites) {
          [favourites] = result.map((el) => JSON.parse(el.favourites));
        }
        console.warn("fav", favourites);
        data.map((fav) => favourites.push(fav));
        connexion.query(
          "UPDATE user SET favourites = ? WHERE id = ?",
          [JSON.stringify(favourites), userID],
          (error1, result1) => {
            if (error1) {
              res.status(400).send(error1);
            } else {
              res.send(result1);
            }
          }
        );
      }
    }
  );
});

router.delete("/api/favourites/:userID/:favouriteID", (req, res) => {
  const { userID, favouriteID } = req.params;
  connexion.query(
    "SELECT favourites FROM user WHERE id = ?",
    [userID],
    (error, result) => {
      if (error) {
        res.status(400).send(error);
      } else {
        let favourites = [];
        if (result[0].favourites) {
          favourites = result
            .map((el) => JSON.parse(el.favourites))[0]
            .filter((favourite) => favourite.id !== favouriteID);
        }
        connexion.query(
          "UPDATE user SET favourites = ? WHERE id = ?",
          [JSON.stringify(favourites), userID],
          (error1, result1) => {
            if (error1) {
              res.status(400).send(error1);
            } else {
              res.send(result1);
            }
          }
        );
      }
    }
  );
});

module.exports = router;
