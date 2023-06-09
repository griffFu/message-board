var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini MesageBoard", messages: messages });
});

// route for the button that takes you to new to create and submit messages
router.post("/", function (req, res, next) {
  res.redirect("/new");
});

//handling all the form jazz, the order of this is still confusing me slightly
router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.name,
    user: req.body.message,
    added: new Date(),
  });
  res.redirect("/");
});
module.exports = router;
