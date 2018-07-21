
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require('./config/key');
const rRoutes = require('./routes/restaurants.js');
var cors = require('cors')
const router = express.Router();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(cors())

app.use(express.static("public"));
app.use('/', rRoutes);

mongoose.connect(keys.mongoURI, (err) => {
  if (err) throw err;
  console.log('Database successfully connected');
  app.listen(keys.PORT, () => {
    console.log(`App listening on PORT ${keys.PORT}`);
  });
});