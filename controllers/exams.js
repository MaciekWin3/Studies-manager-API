const mongoose = require("mongoose");

const Exam = require("../models/exam");

exports.examsAll = (req, res, next) => {
  Exam.find()
    .then((docs) => {
      res.status(200).json({
        message: "List of all Exams",
        data: docs,
      });
    })
    .catch((err) => res.status(500).json({ message: err }));
};

exports.examNew = (req, res, next) => {
  const exam = new Exam({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    date: req.body.date,
    describtion: req.body.describtion,
    progress: req.body.progress,
    comments: req.body.comments,
    typeOfExam: req.body.coworkers,
  });
  exam.save()
    .then((doc) => {
      res.status(200).json({
        message: "New Exam added",
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ message: err }));
};

exports.examSearchByName = (req, res, next) => {
  const name = req.params.name;
  Exam.find({ name: name })
    .then((doc) => {
      res.status(200).json({
        message: "Exam " + name + " details ",
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ message: err }));
};

exports.examSearchById = (req, res, next) => {
  const id = req.params.id;
  Exam.findById(id)
    .then((doc) => {
      res.status(200).json({
        message: "Exam " + id + " details ",
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ message: err }));
};

exports.examUpdateStatus = (req, res, next) => {
  const id = req.params.id;
  Exam.findByIdAndUpdate(
    id,
    {
      $push: {
        comments: req.body.comments,
      },
      progress: req.body.progress,
    },
    {
      new: true,
    }
  ).exec(function (error, Exam) {
    if (error) {
      return res
        .status(400)
        .send({ message: "Failed to add comment due to invalid params!" });
    }
    return res.status(200).send(Exam);
  });
};

exports.examDelete = (req, res, next) => {
  const name = req.params.name;
  Exam.findByIdAndDelete(id)
    .then((doc) => {
      res.status(200).json({
        wiadomość: "Exam " + name + " has been deleted/finished!",
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ wiadomość: err }));
};

//update produktu

exports.examUpdate = (req, res, next) => {
  Exam.findByIdAndUpdate(id, req.body, {
    new: true,
  })
    .then((doc) => {
      res.status(200).json({
        wiadomość: "Zmieniono produkt o nr " + id,
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ wiadomość: err }));
};
