var Employee = require("../models/Empolyee");

module.exports.view = function (req, res, next) {
  Employee.find()
    .select("employeeId first_name last_name Designation  Department Email -_id")
    .exec()
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      return err;
    });
};
module.exports.viewSorted = function (req, res, next) {
  Employee.find()
    .select("-_id")
    .sort("-employeeId")
    .exec()
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      return err;
    });
};

module.exports.viewone = function (req, res, next) {
  Employee.findOne({ employeeId: req.params.employeeId })
    .exec()
    .then((employee) => res.json(employee))
    .catch((err) => {
      return err;
    });
};

module.exports.add = function (req, res, next) {
  Employee.create(req.body)
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      return err;
    });
};

module.exports.edit = function (req, res, next) {
  Employee.findOneAndUpdate(
    { employeeId: req.params.employeeId },
    { $set: req.body },
  )
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      return err;
    });
};
