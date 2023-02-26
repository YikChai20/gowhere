require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Create tables
const db = require("./app/models");
const dbSync = process.env.DB_SYNC === "true" ? true :false
db.sequelize.sync({force: dbSync});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Go Where application." });
});

// routes
require("./app/routes/url")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

