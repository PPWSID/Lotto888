const taskModel = require("../models/taskModel");
const projectModel = require("../models/projectModel");
const sprintModel = require("../models/sprintModel");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    return res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Get all tasks error",
    });
  }
};

exports.getTaskByProjectId = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await taskModel.find({ projectId: id });
    return res.status(200).json(task);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Get task by project id error",
    });
  }
};

exports.createTask = async (req, res) => {
  try {
    // get project and sprint id
    const { id } = req.params;
    const { sprintsId } = req.body;

    const project = await projectModel.findById(id);
    if (!project) {
      return res.status(404).send({
        message: "Project not found",
      });
    }

    // create new task
    const body = { ...req.body, projectId: id };
    let newTask = new taskModel(body);
    let data = await newTask.save();

    // push task id to project and sprint
    await projectModel.findByIdAndUpdate(id, {
      $push: { tasks: newTask._id },
    });
    if (sprintsId) {
      await sprintModel.findByIdAndUpdate(sprintsId, {
        $push: { tasks: newTask._id },
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Create new task error",
    });
  }
};
