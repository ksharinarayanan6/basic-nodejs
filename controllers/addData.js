const Data = require("../models/data.js");

exports.addData = (req, res, next) => {

  const attributes = {
    firstName: req.body.firstName,
    secondName: req.body.secondName,
    age: req.body.age,
    isStudent: req.body.isStudent,
    motherTongue: req.body.motherTongue,
    firstName: req.body.firstName,
  };

  const data = new Data(attributes);
  console.log(attributes);
  data.save().then(
    console.log("Data successfully inserted!"),
    res.redirect("/data")
  );

};

exports.fetchData = (req, res, next) => {
  Data.find().then(data => {
    res.render("data", {
      data: data
    })
  });
};
