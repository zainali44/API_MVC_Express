var express = require("express");
var router = express.Router();
var Team = require("../models/Team");
var teamCont = require("../controller/team");

router.get("/", function (req, res, next) {
  res.send("this is teams dashboard");
});

router.get("/view", teamCont.view);

router.post("/add", teamCont.add);

router.delete("/delete/:teamId", teamCont.delete);

module.exports = router;
