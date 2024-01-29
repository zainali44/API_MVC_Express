var mongoose = require("mongoose");
var pizzaSchema = new mongoose.Schema({
    pizzaId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    }
    });

module.exports = mongoose.model("Pizza", pizzaSchema);