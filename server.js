const express = require("express");
// const path = require("path");
const app = express();


const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./client/routing/apiRoutes")(app);
require("./client/routing/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});
