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
    usersArr.push(
      {
        name: "BobGamer6",
        image:
          "https://upload.wikimedia.org/wikipedia/en/b/bb/Male_Bathroom_Symbol.png",
        score: [1, 5, 2, 3, 4, 3, 2, 5, 2, 5],
      },
      {
        name: "Mr Ia",
        image:
          "https://upload.wikimedia.org/wikipedia/en/b/bb/Male_Bathroom_Symbol.png",
        score: [5, 5, 5, 5, 5, 5, 2, 5, 2, 5],
      }
    );

    res.json(usersArr);
  });
};
