const sprintModel = require("../models/sprintModel");
const projectModel = require("../models/projectModel");

exports.getAllSprints = async (req, res) => {
  try {
    const sprints = await sprintModel.find();
    return res.status(200).json(sprints);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Get all sprints error",
    });
  }
};

exports.getSprintByProjectId = async (req, res) => {
  try {
    const { id } = req.params;
    const sprints = await sprintModel.find({ projectId: id });
    return res.status(200).json(sprints);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Get sprint by project id error",
    });
  }
};

exports.createSprint = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await projectModel.findById(id);
    if (!project) {
      return res.status(404).send({
        message: "Project not found",
      });
    }

    let body = { ...req.body, projectId: id };
    let newSprint = new sprintModel(body);
    let data = await newSprint.save();

    await projectModel.findByIdAndUpdate(id, {
      $push: { sprints: newSprint._id },
    });

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Create new sprint error",
    });
  }
};
