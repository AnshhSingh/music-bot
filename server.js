var express = require("express");
var http = require("http");
var app = express();

// Ping the app
app.use(express.static("public"));
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendStatus(200);
});

// req
var listener = app.listen(process.env.PORT || 8080, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

