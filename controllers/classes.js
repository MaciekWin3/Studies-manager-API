const mongoose = require("mongoose");

const Class = require("../models/class");

exports.timetable = (req, res, next) => {
  Class.find()
    .then((docs) => {
      res.status(200).json({
        message: "List of all clases",
        data: docs,
      });
    })
    .catch((err) => res.status(500).json({ message: err }));
};

exports.classNew = (req, res, next) => {
  const newClass = new Class(req.body);
  newClass._id = new mongoose.Types.ObjectId();
  newClass
    .save()
    .then((doc) => {
      res.status(200).json({
        message: "New class added",
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ message: err }));
};

exports.classSearchByName = (req, res, next) => {
  const name = req.params.name;
  Class.find({ name: name })
    .then((doc) => {
      res.status(200).json({
        message: "Class " + name + " details ",
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ message: err }));
};

exports.classSearchById = (req, res, next) => {
  const id = req.params.name;
  Class.findById(id)
    .then((doc) => {
      res.status(200).json({
        message: "Class " + id + " details ",
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ message: err }));
};

exports.classUpdateStatus = (req, res, next) => {
  const id = req.params.id;
  Class.findByIdAndUpdate(
    id,
    {
      $push: {
        comments: req.body.comments,
        homeworks: req.body.homeworks,
      },
    },
    {
      new: true,
    }
  ).exec(function (error, vclass) {
    if (error) {
      return res
        .status(400)
        .send({ message: "Failed to add comment due to invalid params!" });
    }
    return res.status(200).send(vclass);
  });
};

exports.classDelete = (req, res, next) => {
  const id = req.params.id;
  Class.findByIdAndDelete(id)
    .then((doc) => {
      res.status(200).json({
        wiadomość: "Project " + id + " has been deleted/finished!",
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ wiadomość: err }));
};

exports.classUpdate = (req, res, next) => {
  const id = req.params.id;
  Class.findByIdAndUpdate(id, req.body, {
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
