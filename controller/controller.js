const interest = require("../model/interest");
const childInterest = require("../model/childInterest");
const { runInNewContext } = require("vm");

exports.PostSubInterest = (req, res) => {
  const subInterest = req.body;
  const saveSubInterestData = new childInterest(subInterest);
  saveSubInterestData
    .save()
    .then((data) => {
      console.log(`Sub Interest Submitted: ${data}`);
      res.json({ message: "Sub Interest Added" });
    })
    .catch((err) => {
      console.log(`Sorry Problem Occur: ${err}`);
      res.json({ message: "Sorry Problem Occur" });
    });
};

exports.postInterest = (req, res) => {
  const interestData = {
    name: req.body.name,
    interestField: req.body.interestField,
  };
  childInterest
    .findOne({ subInterest: req.body.subInterest })
    .then((childData) => {
      interestData.childInterestId = childData._id;
      const saveInterestData = new interest(interestData);
      saveInterestData
        .save()
        .then((data) => {
          console.log(`Interest Added Successfully ${data}`);
          res.json({ message: "Interest Added Successfully" });
        })
        .catch((err) => {
          console.log(`Sorry Interest Not Added ${err}`);
          res.json({ message: "Sorry Interest Not Added" });
        });
    });
};

exports.ReadInfo = (req, res) => {
  interest
    .find()
    .populate("childInterestId", "-_id")
    .exec()
    .then((result) => {
      console.log(result);
      res.json({ message: result });
    })
    .catch((err) => {
      res.json({ message: err });
    });
};

exports.UpdateInfo = (req, res) => {
  interest
    .findOneAndUpdate({ name: req.body.name }, req.body.update, {
      new: true,
    })
    .then((data) => {
      res.json({
        message: "Updated Successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.json({ message: "No DataUpdate" });
    });
};

exports.deleteInfo = (req, res) => {
  interest
    .findOneAndDelete({ name: req.body.name })
    .then((deleteResult) => {
      res.json({
        message: " Delted.",
        data: deleteResult.name,
      });
    })
    .catch((err) => {
      res.json({ message: " Not Deleted." });
    });
};
