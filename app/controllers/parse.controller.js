const Parsed = require("../models/parse.model.js")
exports.createVersion1 = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  const requestData = {
    data: req.body.data,
    version: 1
  }
  Parsed.createVersion1(requestData, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while converting string"
      });
    else res.send(data);
  });
}

exports.createVersion2 = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  const requestData = {
    data: req.body.data,
    version: 2
  }
  Parsed.createVersion2(requestData, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while converting string"
      });
    else res.send(data);
  });
}