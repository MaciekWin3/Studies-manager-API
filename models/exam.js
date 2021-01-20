const mongoose = require("mongoose");

const examSchema = mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
    name: {
      type: String,
      unique: true,
    },
    date: {
      type: Date,
      min: Date.now(),
    },
    describtion: {
      type: String,
    },
    progress: {
      type: Number,
      min: 0,
      max: 100,
    },
    comments: [String],
    typeOfExam: {
      type: String,
    },
  },
  { timestamps: true }
);

const Exam = mongoose.model("Exam", examSchema);
module.exports = Exam;
