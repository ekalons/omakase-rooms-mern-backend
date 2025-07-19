const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  review_count: {
    type: Number,
    required: true,
  },
  neighborhood: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    requried: true,
  },
  michelin_stars: {
    type: Number,
    required: true,
  },
  serve_style: {
    type: String,
    required: true,
  },
  coordinates: {
    type: Object,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

const Room = mongoose.model("room", RoomSchema);
module.exports = Room;
