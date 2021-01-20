const express = require("express");
const router = express.Router();

const MeetingsController = require("../controllers/meetings");

const checkAuth = require('../middleware/check-auth');

router.get("/", checkAuth, MeetingsController.meetings);

router.post("/", checkAuth, MeetingsController.meetingNew);

router.get("/:projectId", checkAuth, MeetingsController.meetingProjects);

router.get("/:id", checkAuth, MeetingsController.meetingSearchById);

router.delete("/:id", checkAuth, MeetingsController.meetingDelete);

router.patch("/:id", checkAuth, MeetingsController.meetingUpdate);

module.exports = router;