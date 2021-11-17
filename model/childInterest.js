const mongoose = require("mongoose");

const childInterest = mongoose.Schema({
  subInterest: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("childInterest", childInterest);
