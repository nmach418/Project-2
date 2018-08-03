const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const methodOverride = require("method-override");

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.use(methodOverride("_method"));
app.use(require("./routes/index.js"));

// app.listen(3500, () => console.log("this server is plugging along"));

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})