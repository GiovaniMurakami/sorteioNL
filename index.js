const express = require("express");
const { engine } = require("express-handlebars");
require("dotenv").config();

const app = express();

//Routes
const sortRoutes = require("./routes/sortRoutes");

//Setting View Engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

//Setting form reader
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.use(express.static("public"));

app.use("/", sortRoutes);

app.listen(process.env.PORT || 3000);
