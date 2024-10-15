const projectModel = require("../models/projectModel");
const taskModel = require("../models/taskModel");
const sprintModel = require("../models/sprintModel");

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await projectModel.find();
    return res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Get all projects error",
    });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await projectModel
      .findById(id)
      .populate("tasks")
      .populate("sprints")
      .populate({ path: "members.memberId", select: "name email" });

    if (!project) {
      return res.status(404).send({
        message: "Project not found",
      });
    }
    
    return res.status(200).json(project);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Get project by id error",
    });
  }
};

exports.createProject = async (req, res) => {
  try {
    let newProject = new projectModel(req.body);
    let data = newProject.save();
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Create new project error",
    });
  }
};
