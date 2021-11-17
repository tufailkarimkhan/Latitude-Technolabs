const mongoose = require("mongoose");

const interest = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  interestField: {
    type: String,
    require: true,
  },
  childInterestId: {
    type: mongoose.Schema.Types.ObjectId,
    refer: "childInterest",
  },
});

module.exports = mongoose.model("interest", interest);
