const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const port = process.env.PORT || 8080;

const todos = [
  "Shopping?",
  "Apple",
  "Grapes?",
  "Eat Apple?",
  "Eat Grapes?",
  "!?"
];

const completed = [];

app.engine("mustache", mustacheExpress());
app.set("views", "./public");
app.set("view engine", "mustache");

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

// ROUTES
app.use("/", express.static("./public"));

app.get("/", function(req, res) {
  res.render("index", { todos: todos });
});

app.post("/", function(req, res) {
  todos.push(req.body.searchInput);
  res.redirect("/");
});

function removeTodo(e) {
  alert("ALERT");
  console.log(event.target);
}

// LISTEN
app.listen(port, function() {
  console.log("You are on the PORT: ", port);
});
