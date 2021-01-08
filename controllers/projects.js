const mongoose = require("mongoose");

const Project = require("../models/project");

exports.check = (req, res, next) => {
  res.status(200).json({
    message: "it works!",
  });
};

exports.projectsAll = (req, res, next) => {
  Project.find()
    .then((docs) => {
      res.status(200).json({
        message: "List of all projects",
        data: docs,
      });
    })
    .catch((err) => res.status(500).json({ message: err }));
};

exports.projectNew = (req, res, next) => {
  const project = new Project({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    deadline: req.body.deadline,
    describtion: req.body.describtion,
    progress: req.body.progress,
    comments: req.body.comments,
    coworkers: req.body.coworkers,
  });
  project
    .save()
    .then((doc) => {
      res.status(200).json({
        message: "New project added",
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ message: err }));
};

exports.projectSearchByName = (req, res, next) => {
  const name = req.params.name;
  Project.find({ name: name })
    .then((doc) => {
      res.status(200).json({
        message: "Project " + name + " details ",
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ message: err }));
};

exports.projectSearchById = (req, res, next) => {
  const id = req.params.id;
  Project.findById(id)
    .then((doc) => {
      res.status(200).json({
        message: "Project " + id + " details ",
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ message: err }));
};

exports.projectUpdateStatus = (req, res, next) => {
  const id = req.params.id;
  Project.findByIdAndUpdate(
    id,
    {
      $push: {
        comments: req.body.comments,
      },
      progress: req.body.progress,
      coworkers: req.body.coworkers,
    },
    {
      new: true,
    }
  ).exec(function (error, project) {
    if (error) {
      return res
        .status(400)
        .send({ message: "Failed to add comment due to invalid params!" });
    }
    return res.status(200).send(project);
  });
};

exports.projectDelete = (req, res, next) => {
  const id = req.params.id;
  Project.findByIdAndDelete(id)
    .then((doc) => {
      res.status(200).json({
        wiadomość: "Project " + id + " has been deleted/finished!",
        info: doc,
      });
    })
    .catch((err) => res.status(500).json({ wiadomość: err }));
};

//update produktu

exports.projectUpdate = (req, res, next) => {
  const id = req.params.id;
  Project.findByIdAndUpdate(id, req.body, {
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
