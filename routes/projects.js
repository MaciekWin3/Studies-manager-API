const express = require("express");
const router = express.Router();

const ProjectsController = require("../controllers/projects");

const checkAuth = require('../middleware/check-auth');

router.get("/", checkAuth, ProjectsController.projectsAll);

router.post("/", checkAuth, ProjectsController.projectNew);

router.get("/searchbyname/:name", checkAuth, ProjectsController.projectSearchByName);

router.get("/:id", checkAuth, ProjectsController.projectSearchById);

router.patch("/updatestatus/:id", checkAuth, ProjectsController.projectUpdateStatus);

router.delete("/:id", checkAuth, ProjectsController.projectDelete);

router.patch("/:id", checkAuth, ProjectsController.projectUpdate);

module.exports = router;
