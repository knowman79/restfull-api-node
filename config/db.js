const sequelize = require("sequelize");

const db = new sequelize('postgres://postgres:60038@localhost')

db.sync({});

module.exports = db;
