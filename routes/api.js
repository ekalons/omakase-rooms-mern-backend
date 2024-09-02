const express = require("express");
const router = express.Router();
const Room = require("../models/room");

router.get("/rooms", (req, res, next) => {
  Room.find({})
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
