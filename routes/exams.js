const express = require("express");
const router = express.Router();

const ExamsController = require("../controllers/exams");

router.get("/", ExamsController.examsAll);

router.post("/", ExamsController.examNew);

router.get("/searchbyname/:name", ExamsController.examSearchByName);

router.get("/:id", ExamsController.examSearchById);

router.patch("/updatestatus/:id", ExamsController.examUpdateStatus);

router.delete("/:id", ExamsController.examDelete);

router.patch("/:id", ExamsController.examUpdate);

module.exports = router;