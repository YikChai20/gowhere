// const config = require("../config/db.js");
const Sequelize = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.url = require("../models/url.js")(sequelize, Sequelize);

module.exports = db;