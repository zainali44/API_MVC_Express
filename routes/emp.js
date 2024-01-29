var express = require("express");
var router = express.Router();
var Employee = require("../models/Empolyee");
var Emp = require("../controller/Empolye");

router.get("/", function (req, res, next) {
  res.send("this is employees dashboard");
});

router.get("/view", Emp.view);
router.get("/view/sorted", Emp.viewSorted);
router.get("/view/:employeeId", Emp.viewone);

router.post("/add", Emp.add);

router.put("/edit/:employeeId", Emp.edit);

module.exports = router;
