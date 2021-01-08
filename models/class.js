const mongoose = require("mongoose");

const classSchema = mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
    name: {
      type: String,
      required: true,
    },
    dayoftheweek: {
      type: String,
      required: true,
    },
    week: {
      type: Number,
    },
    start: [
      {
        hour: {
          type: Number,
          required: true,
          min: 0,
          max: 23,
        },
        minute: {
          type: Number,
          required: true,
          min: 0,
          max: 59,
        },
      },
    ],
    lenght: [
      {
        hour: {
          type: Number,
          required: true,
          min: 0,
          max: 23,
        },
        minute: {
          type: Number,
          required: true,
          min: 0,
          max: 59,
        },
      },
    ],
    finish: [
      {
        hour: {
          type: Number,
          required: true,
          min: 0,
          max: 23,
        },
        minute: {
          type: Number,
          required: true,
          min: 0,
          max: 59,
        },
      },
    ],
    describiton: {
      type: String
    },
    comments: [String],
    homeworks: [
      {
        info: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Class = mongoose.model("Class", classSchema);
module.exports = Class;
