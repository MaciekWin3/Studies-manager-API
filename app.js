const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//routes import
const projectRoutes = require("./routes/projects");
const examRoutes = require("./routes/exams");
const classRoutes = require("./routes/classes");

const dbURI =
  "mongodb+srv://maciek:<password>@studies-manager-api.qmnl3.mongodb.net/<dbname>?retryWrites=true&w=majority";

//db connection
mongoose
  .connect(
    "mongodb+srv://maciek:" +
      process.env.hasloAtlasa +
      "@studies-manager-api.qmnl3.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    console.log("Connected to db. Starting app...");
    app.listen(3000);
    console.log("App is ready to use");
  })
  .catch((err) => console.log("Error, when connecting to DB!"));

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
app.use(morgan("combined"));
app.use(bodyParser.json());

//routes
app.use("/projects", projectRoutes);
app.use("/exams", examRoutes);
app.use("/classes", classRoutes);

//error handling
app.use((req, res, next) => {
  const error = new Error("Nie odnaleziono");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ wiadomość: error.message });
});

module.exports = app;
