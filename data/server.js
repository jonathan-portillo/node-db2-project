const express = require("express");

const carRouter = require("./car-router");

const server = express();

server.use(express.json());

server.use("/car", carRouter);

server.get("/", (req, res) => {
  res.send("Api is up");
});

module.exports = server;
