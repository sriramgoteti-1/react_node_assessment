const mongoose = require("mongoose");

const Questionschema = new mongoose.Schema(
  {
    difficulty: {
      type: Number,
      required: true,
      unique: true,
    },
    Title: {
      type: String,
      required: true,
      unique: true,
    },
    Options: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", Questionschema);