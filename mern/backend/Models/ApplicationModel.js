const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  address: { type: String, required: true },
  department: { type: String, required: true },
  rollNumber: { type: String, required: true, unique: true },
  nationality: { type: String, required: true },
  admissionYear: { type: Number, required: true },
  guardianContact: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  previousSchool: { type: String, required: true },
  extracurricularActivities: { type: String },
});

const ApplicationModel = mongoose.model("Applications", studentSchema);

 module.exports = ApplicationModel;