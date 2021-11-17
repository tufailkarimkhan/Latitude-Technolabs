const express = require("express");
const bodyparser = require("body-parser");
const router = require("./router/routes");
const connectDB = require("./database/database");
const port = 3000;
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/", router);

app.listen(port, () => {
  console.log("Latitude is listening at: ", port);
  connectDB();
});
