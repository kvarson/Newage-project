const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequilize.js");

const Contact = sequelize.define("Contact", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
});

module.exports = Contact;
