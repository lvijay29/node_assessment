const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const response = [];
app.get("/", (req, res) => {
  res.json({ Message: "Node Assessment" });
});
require("./app/routes/parse.routes.js")(app);
function defaultMethod() {
  let request = "JOHN0000MICHAEL0009994567";
  const parsed = {
    firstName: "",
    lastName: "",
    clientId: ""
  }
  const parseArrV1 = [];
  const parseArrV2 = [];
  const strArray = request.split("0")
  let str = "";
  let count = 0;
  strArray.forEach(element => {
    if (element !== "") {
      if (parseArrV1.length > 0) {
        parseArrV1[count] = parseArrV1[count] + '0';

        count = (count + 1);
      }
      parseArrV1.push(element);
    }
    else {
      parseArrV1[count] = parseArrV1[count] + '0';
    }
    if (element !== "") {
      parseArrV2.push(element);
    }
  });
  parseArrV1.forEach((item, index) => {
    switch (index) {
      case 0:
        parsed.firstName = item;
        break;
      case 1:
        parsed.lastName = item;
        break;
      case 2:
        parsed.clientId = item;
        break;
      default:
    }
  })
  console.log("-------------------------------------------------")
  console.log("            API Parse Version 1")
  console.log("-------------------------------------------------")
  console.log(parsed);
  parseArrV2.forEach((item, index) => {
    switch (index) {
      case 0:
        parsed.firstName = item;
        break;
      case 1:
        parsed.lastName = item;
        break;
      case 2:
        parsed.clientId = item;
        break;
      default:
    }
  })
  console.log("-------------------------------------------------")
  console.log("            API Parse Version 2")
  console.log("-------------------------------------------------")
  console.log(parsed);

}

const port = process.env.port || 3200;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
  defaultMethod();
});