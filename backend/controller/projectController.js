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
      error: "Get all projects error",
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
      error: "Create new project error",
    });
  }
};
