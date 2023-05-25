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
