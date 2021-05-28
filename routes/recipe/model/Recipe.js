const mongoose = require("mongoose");


const recipeName = new mongoose.Schema({
    recipeName: {
    type: String,
  },
});

// USER IS THE ONE BEING USING IN ROBO 3T
module.exports = mongoose.model("receipt", recipeName);