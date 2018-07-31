const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const methodOverride = require("method-override");

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public")); // Research
hbs.registerPartials(__dirname + "/views/partials"); // Research
app.set("view engine", "hbs");
app.use(methodOverride("_method"));  // Review
app.use(require("./routes/index.js"));

app.listen(3500, () => console.log("this server is limping along"));