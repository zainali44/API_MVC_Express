var Pizza = require("../models/Pizza");

module.exports.view = function (req, res, next) {
  Pizza.find()
    .select("pizzaId name -_id")
    .exec()
    .then((pizza) => {
      res.json(pizza);
    })
    .catch((err) => {
      return err;
    });
};

module.exports.add = function (req, res, next) {
    Pizza.create(req.body)
        .then((pizza) => {
        res.json(pizza);
        })
        .catch((err) => {
        return err;
        });
    };

module.exports.viewone = function (req, res, next) {
    Pizza.findOne({ pizzaId: req.params.pizzaId })
        .exec()
        .then((pizza) => {
        res.json(pizza);
        })
        .catch((err) => {
        return err;
        });
    }
    