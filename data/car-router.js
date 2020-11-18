const express = require("express");
const knex = require("knex");
const db = require("./db-config");
const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then((car) => {
      res.json(car);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "failed to retrieve cars" });
    });
});

router.post("/", (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData)
    .then((id) => {
      db("cars")
        .where({ id: id[0] })
        .then((newCarEntry) => {
          res.status(201).json(newCarEntry);
        });
    })
    .catch((err) => {
      console.log("post error", err);
      res.status(500).json({ message: "failled to add a new car" });
    });
});

module.exports = router;
