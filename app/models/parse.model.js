const Parsed = function (parse) {
  this.parseName = parse.parseName
}
Parsed.createVersion1 = (req, res) => {
  let result = defaultMethod(req)
  response = {
    statusCode: 200,
    data: result
  }
  res(null, response);
  return;
}

Parsed.createVersion2 = (req, res) => {
  let result = defaultMethod(req)
  response = {
    statusCode: 200,
    data: result
  }
  res(null, response);
  return;
}

function defaultMethod(request) {
  
  const parsed = {
    firstName: "",
    lastName: "",
    clientId: ""
  }
  const parseArr = [];
  const strArray = request.data.split("0")
  let str = "";
  let count = 0;
  strArray.forEach(element => {
    switch (request.version) {
      case 1:
        if (element !== "") {
          if (parseArr.length > 0) {
            parseArr[count] = parseArr[count] + '0';

            count = (count + 1);
          }
          parseArr.push(element);
        }
        else {
          parseArr[count] = parseArr[count] + '0';
        }
        break;
      case 2:
        if (element !== "") {
          if(element.length > 0)
          {
            element = formatNumber(element)
          }
          parseArr.push(element);
        }
        break;
      default:
    }
  });

  parseArr.forEach((item, index) => {
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

  return parsed;
}

function formatNumber(clientId) {
  if (Number(clientId) && clientId.length === 7) {
    return clientId.substr(0, 3)+"-"+ clientId.substr(3, 7)
  }
  return clientId;
}

module.exports = Parsed;