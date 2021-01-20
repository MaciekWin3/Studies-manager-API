const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const router = express.Router();

const User = require("../models/user");

router.post("/register", (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      res.status(500).json({ wiadomość: err });
    } else {
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: hash,
      });
      require("dotenv").config();
      var transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        secure: true,
        auth: {
          user: process.env.email,
          pass: process.env.hasloMail,
        },
      });

      var mailOptions = {
        from: process.env.email,
        to: req.body.email,
        subject: "Account created!",
        text: "Thanks for using our api!",
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      user
        .save()
        .then((user) => {
          res.status(201).json({
            message: "Account created",
            info: user,
          });
        })
        .catch((err) => res.status(500).json({ message: err }));
    }
  });
});

router.delete("/:userId", (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .then((user) => {
      res.status(200).json({
        message: "Account deleted",
      });
    })
    .catch((err) => res.status(500).json({ message: err }));
});


router.post("/login", (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        res.status(401).json({ message: "Login failed" });
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          res.status(500).json({ message: err });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
              userId: user._id,
            },
            process.env.hasloJWT,
            {
              expiresIn: "1h",
            }
          );
          res.status(200).json({
            message: "User loged in",
            token: token,
          });
        } else {
          res.status(401).json({ message: "Auth failed!" });
        }
      });
    })
    .catch((err) => res.status(500).json({ message: err }));
});

module.exports = router;
