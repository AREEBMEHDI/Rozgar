const mongoose = require("mongoose");

const projectBaseSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  Whydoyouwanttodobusiness: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  businessplan: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const ProjectBase = mongoose.model("ProjectBase", projectBaseSchema);

module.exports = ProjectBase;
