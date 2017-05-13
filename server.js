var express = require("express"),
    handlebars = require("express-handlebars"),
    methodOverride = require("method-override"),
    bodyParser = require("body-parser");

var app = express(),
    PORT = process.env.PORT || 8080;


var db = require("./models");

app.use(express.static(process.cwd() + "/public")); // serving a whole file

// Using the Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride("_method")); // method overide

// Using the templates Engines
app.engine("handlebars", handlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Using the Routes
var routes = require("./controllers/burgerController");
app.use("/", routes);


db.sequelize.sync({}).then(function () {

});
app.listen(PORT);