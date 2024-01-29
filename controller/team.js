var Team = require("../models/Team");

module.exports.view = function (req, res, next) {
    Team.find()
      .select("teamId name -_id")
      .exec()
      .then((team) => {
        res.json(team);
      })
      .catch((err) => {
        return err;
      });
  };
  
  module.exports.add = function (req, res, next) {
    Team.create(req.body)
      .then((team) => {
        res.json(team);
      })
      .catch((err) => {
        return err;
      });
  };
  
  module.exports.delete = function (req, res, next) {
    Team.deleteOne({ teamId: req.params.teamId })
      .then((team) => {
        res.json(team);
      })
      .catch((err) => {
        return err;
      });
  };
  