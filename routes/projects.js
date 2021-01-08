const express = require("express");
const router = express.Router();

const ProjectsController = require("../controllers/projects");

router.get("/", ProjectsController.projectsAll);

router.post("/", ProjectsController.projectNew);

router.get("/searchbyname/:name", ProjectsController.projectSearchByName);

router.get("/:id", ProjectsController.projectSearchById);

router.patch("/updatestatus/:id", ProjectsController.projectUpdateStatus);

router.delete("/:id", ProjectsController.projectDelete);

router.patch("/:id", ProjectsController.projectUpdate);

module.exports = router;
