var usersArr = require("../data/users");
var qArr = require("../data/question");

module.exports = function (app) {
  app.get("/api/users", function (req, res) {
    res.json(usersArr);
  });

  app.post("/api/users", function (req, res) {
    var newUser = req.body;

    usersArr.push(newUser);
  
    res.json(newUser);
  });

  app.get("/api/ques", function (req, res) {
    res.json(qArr);
  });

  app.post("/api/users/clear", function (req, res) {
    usersArr.length = [];

    res.json(usersArr);
  });
};
