const express = require("express");
const router = express.Router();

const ClassesController = require("../controllers/classes");

router.get("/", ClassesController.timetable);

router.post("/", ClassesController.classNew);

router.get("/searchbyname/:name", ClassesController.classSearchByName);

router.get("/:name", ClassesController.classSearchById);

router.patch("/updatestatus/:id", ClassesController.classUpdateStatus);

router.delete("/:id", ClassesController.classDelete);

router.patch("/:id", ClassesController.classUpdate);



module.exports = router;