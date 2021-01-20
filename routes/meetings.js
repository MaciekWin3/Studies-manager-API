const express = require("express");
const router = express.Router();

const MeetingsController = require("../controllers/meetings");

const checkAuth = require('../middleware/check-auth');

router.get("/", MeetingsController.meetings);

router.post("/", MeetingsController.meetingNew);

router.get("/:projectId", MeetingsController.meetingProjects);

router.get("/:id", MeetingsController.meetingSearchById);

router.delete("/:id", MeetingsController.meetingDelete);

router.patch("/:id", MeetingsController.meetingUpdate);

module.exports = router;