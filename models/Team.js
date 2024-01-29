var mongoose = require("mongoose");
var teamSchema = new mongoose.Schema({
  teamId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Team", teamSchema);
