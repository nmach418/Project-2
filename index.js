const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const methodOverride = require("method-override");

const app = express()
app.use(bodyParser.urlencoded({ extended: true}));
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.use(require("./routes/index.js"));
app.use(methodOverride("_method"));

app.listen(3500, () => console.log("this server is running like greased lightning"));