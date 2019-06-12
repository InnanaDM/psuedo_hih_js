var express = require("express");

var app = express();
var PORT = 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/dog", function(req, res) {
  // Handlebars requires an object to be sent to the dog handlebars file.
  // Lucky for us, animals[0] is an object!

  // 1. send the dog object from the animals array to the dog handlebars file.
  res.render("dog", animals[0]);
});

app.get("/all-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index handlebars file.



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
