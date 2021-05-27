const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;

// static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));

// Templating Engine (EJS)
app.set("view engine", "ejs");
// Body parser
app.use(bodyParser.urlencoded({ extended: true }));

// routes
const newsRouter = require("./routes/news");
app.use("/", newsRouter);

app.listen(PORT, () => console.log(`server is running at ${PORT}`));
