const express = require("express");
const router = express.Router();

const ExamsController = require("../controllers/exams");

const checkAuth = require('../middleware/check-auth');

router.get("/", checkAuth, ExamsController.examsAll);

router.post("/", checkAuth, ExamsController.examNew);

router.get("/searchbyname/:name", checkAuth, ExamsController.examSearchByName);

router.get("/:id", checkAuth, ExamsController.examSearchById);

router.patch("/updatestatus/:id", checkAuth, ExamsController.examUpdateStatus);

router.delete("/:id", checkAuth, ExamsController.examDelete);

router.patch("/:id", checkAuth, ExamsController.examUpdate);

module.exports = router;
