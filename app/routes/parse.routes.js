module.exports = app => {
    const parse = require("../controllers/parse.controller.js");

    // Parse Version 1
    app.post("/api/v1/parse", parse.createVersion1);

    // Parse Version 2
    app.post("/api/v2/parse", parse.createVersion2);
}