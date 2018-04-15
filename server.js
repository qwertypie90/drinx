
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require('./config/key');
require('./models/Resturant');

mongoose.connect(keys.mongoURI);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(express.static("public"));
require('./routes/resturants')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});