const mongoose = require("mongoose");

const taskschema = new Schema({
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "projectData",
  },
  sprintsId: [
    {
      type: Schema.Types.ObjectId,
      ref: "sprintData",
    },
  ],
  title: String,
  description: String,
  assignedTo: {
    type: Schema.Types.ObjectId,
    ref: "userData",
  },
  status: String,
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "low",
  },
  startDate: Date,
  endDate: Date,
  timeEstimation: Number,
  timeSpent: Number,
  githubUrl: String,
  labels: [String],
});

const taskModel = mongoose.model("taskData", taskschema, "taskData");

module.exports = taskModel;
