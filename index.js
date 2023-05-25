const express = require("express");
const app = express();
const port = 3000;

const userRouter = require("./routes/contacts.js");

app.use(express.json());
app.use("/", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
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

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Synchronize the model with the database
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized successfully.");
  })
  .catch((err) => {
    console.error("Unable to synchronize the database:", err);
  });

module.exports = {
  User,
  sequelize,
};
