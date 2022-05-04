require("dotenv").config();
const express = require("express");

const mysql = require("mysql2");

const router = express.Router();

const connexion = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});
// router.get("/items", ItemController.browse);

connexion.connect((error) => {
  if (error) {
    console.error(error);
  } else {
    console.warn("Bien joué");
  }
});

router.get("/api/users", (_request, response) => {
  connexion.query("SELECT * FROM user", (error, result) => {
    if (error) {
      response.status(404).send(error);
    } else {
      response.status(200).json(result);
    }
  });
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
        const favourites = result.map((el) => JSON.parse(el.favourites))[0];
        data.map(fav => favourites.push(fav));
        connexion.query(
          "UPDATE user SET favourites = ? WHERE id = ?",
          [JSON.stringify(data), userID],
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
