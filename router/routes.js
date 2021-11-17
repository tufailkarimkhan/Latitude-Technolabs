const router = require("express").Router();

const {
  postInterest,
  PostSubInterest,
  ReadInfo,
  UpdateInfo,
  deleteInfo,
} = require("../controller/controller"); //here i import controller.js as module

router.post("/interest", postInterest);

router.post("/subInterest", PostSubInterest);

router.get("/read", ReadInfo);

router.put("/update", UpdateInfo);

router.delete("/delete", deleteInfo);

module.exports = router;
