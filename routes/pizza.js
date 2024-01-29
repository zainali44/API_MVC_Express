var express = require("express");
var router = express.Router();
var Pizza = require("../models/Pizza");
var Piz = require("../controller/Pizza");

router.get("/", function (req, res, next) {
    res.send("this is pizza dashboard");
  });

router.get("/view", Piz.view);
router.post("/add", Piz.add);
router.get("/view/:pizzaId", Piz.viewone);

module.exports = router;