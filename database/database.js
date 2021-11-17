const mongoose = require("mongoose");
const URI = "mongodb://localhost:27017/LatitudeTechnolabs";

const connectDB = () => {
  mongoose
    .connect(URI)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("Connection failed", err);
    });
};

module.exports = connectDB;
