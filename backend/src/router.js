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
router.put(
  "/api/avatar/create/:mail",
  cors(corsOptions),
  (request, response) => {
    const { avatarLink } = request.body;
    const { mail } = request.params;
    connexion.query(
      `UPDATE user SET avatar_url = ? WHERE email = ?`,
      [avatarLink, mail],
      (error, result) => {
        if (error) {
          response.status(500).send(error);
        } else {
          response.status(200).send(result);
        }
      }
    );
  }
);

router.get("/api/avatar/obtain/:mail", (request, response) => {
  const { mail } = request.params;
  connexion.query(
    `SELECT avatar_url FROM user WHERE email = ?`,
    [mail],
    (error, result) => {
      if (error) {
        response.status(404).send(error);
      } else {
        response.status(200).send(result[0]);
      }
    }
  );
});

// Get User infos with his ID
router.get("/api/users/:mail", (request, response) => {
  const { mail } = request.params;
  connexion.query(
    "SELECT * FROM user WHERE email = ?",
    [mail],
    (error, result) => {
      if (error) {
        response.status(404).send(error);
      } else {
        response.status(200).json(result[0]);
      }
    }
  );
});

// FAVOURITES ROUTES
router.get("/api/favourites/:userMail", (req, res) => {
  const { userMail } = req.params;
  connexion.query(
    "SELECT favourites FROM user WHERE email = ?",
    [userMail],
    (error, result) => {
      console.warn(result);
      if (error) {
        res.status(400).send(error);
      } else if (result[0].favourites !== "") {
        res.status(200).send(result.map((el) => JSON.parse(el.favourites)));
      } else {
        res.status(200).send([]);
      }
    }
  );
});

router.post("/api/favourites/:userMail", (req, res) => {
  const { userMail } = req.params;
  const data = req.body;
  connexion.query(
    "SELECT favourites FROM user WHERE email = ?",
    [userMail],
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
          "UPDATE user SET favourites = ? WHERE email = ?",
          [JSON.stringify(favourites), userMail],
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

router.delete("/api/favourites/:userMail/:favouriteID", (req, res) => {
  const { userMail, favouriteID } = req.params;
  connexion.query(
    "SELECT favourites FROM user WHERE email = ?",
    [userMail],
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
          "UPDATE user SET favourites = ? WHERE email = ?",
          [JSON.stringify(favourites), userMail],
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
