const express = require("express");
const router = express.Router();

const projectController = require("../controller/projectController");
const taskController = require("../controller/taskController");
const sprintController = require("../controller/sprintController");

// project
router.get("/", projectController.getAllProjects);
router.get("/:id", projectController.getProjectById);
router.post("/", projectController.createProject);

// task
router.get("/:id/allTasks", taskController.getAllTasks);
router.get("/:id/tasks", taskController.getTaskByProjectId);
router.post("/:id/tasks", taskController.createTask);

// sprint
router.get("/:id/allSprints", sprintController.getAllSprints);
router.get("/:id/sprints", sprintController.getSprintByProjectId);
router.post("/:id/sprints", sprintController.createSprint);

module.exports = router;
