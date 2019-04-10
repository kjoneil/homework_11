var express = require("express");

var app = express();

var PORT = process.env.PORT || 3307;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Used to serve the static home.html 
app.use(express.static("./app/public"))
// ROUTER

require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});