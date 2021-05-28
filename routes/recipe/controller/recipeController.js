const Recipe = require("../model/Recipe");

module.exports = {
  getAllRecipe: function (callback) {
    Recipe.find({}, function (err, payload) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, payload);
      }
    });
  },
  createRecipe: function (body, callback) {
    let createRecipe = new Recipe({
      productName: body.productName,
    });
    createRecipe.save(function (err, payload) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, payload);
      }
    });
  },
};


