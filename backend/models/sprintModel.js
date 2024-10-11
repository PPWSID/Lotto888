const mongoose = require("mongoose");

const sprintschema = new Schema({
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "projectData",
  },
  title: String,
  description: String,
  startDate: Date,
  endDate: Date,
  status: {
    type: String,
    enum: ["current", "upcoming", "past"],
    default: "upcoming",
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "taskData",
    },
  ],
});

const sprintModel = mongoose.model("sprintData", sprintschema, "sprintData");

module.exports = sprintModel;
