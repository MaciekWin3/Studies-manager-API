const mongoose = require("mongoose");

const Meeting = require("../models/meeting");
const Project = require("../models/project");

//alt+shift+f
exports.meetings = (req, res, next) => {
  Meeting.find()
    .then((docs) => {
      res.status(200).json({
        message: "List of all meetings",
        data: docs,
      });
    })
    .catch((err) => res.status(500).json({ message: err }));
};

exports.meetingNew = (req, res, next) => {
  const meeting = new Meeting(req.body);
  meeting._id = new mongoose.Types.ObjectId();
  meeting
    .save()
    .then((doc) => {
      res.status(200).json({
        message: "New meeting scheduled",
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ message: err }));
};

exports.meetingProjects = (req, res, next) => {
  const projectId = req.params.name;
  Meeting.find({ projectId: projectId })
    .then((doc) => {
      res.status(200).json({
        message: "Meetings for project " + projectId,
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ message: err }));
};

exports.meetingSearchById = (req, res, next) => {
  const id = req.params.name;
  Meeting.findById(id)
    .then((doc) => {
      res.status(200).json({
        message: "Meeting " + id + " details",
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ message: err }));
};

exports.meetingDelete = (req, res, next) => {
  const id = req.params.id;
  Meeting.findByIdAndDelete(id)
    .then((doc) => {
      res.status(200).json({
        message: "Meeting " + id + " has been deleted/finished!",
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ wiadomość: err }));
};

exports.meetingUpdate = (req, res, next) => {
  const id = req.params.id;
  Meeting.findByIdAndUpdate(id, req.body, {
    new: true,
  })
    .then((doc) => {
      res.status(200).json({
        message: "Product " + id + " changed",
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ wiadomość: err }));
};
