var usersArr = require("../data/users");

module.exports = function (app) {
  app.get("/api/users", function (req, res) {
    res.json(usersArr);
  });

  app.post("/api/users", function (req, res) {
    usersArr.push(req.body);
    res.json(true);
  });

  app.post("/api/clear", function (req, res) {
    usersArr.length = [];

    res.json(usersArr);
  });
};
