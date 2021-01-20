const express = require("express");
const router = express.Router();

const ClassesController = require("../controllers/classes");

const checkAuth = require('../middleware/check-auth');

router.get("/", checkAuth, ClassesController.timetable);

router.post("/", checkAuth, ClassesController.classNew);

router.get("/searchbyname/:name", checkAuth, ClassesController.classSearchByName);

router.get("/:name", checkAuth, ClassesController.classSearchById);

router.patch("/updatestatus/:id", checkAuth, ClassesController.classUpdateStatus);

router.delete("/:id", checkAuth, ClassesController.classDelete);

router.patch("/:id", checkAuth, ClassesController.classUpdate);



module.exports = router;