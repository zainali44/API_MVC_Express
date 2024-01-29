var mongoose = require("mongoose");
var empSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  Designation: {
    type: String,
    required: true,
  },
    Department: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Employee", empSchema);
