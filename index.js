const express = require("express");
const app = express();
const port = 3000;
const sequelize = require("./db/sequilize.js");

const contactRouter = require("./routes/contacts.js");

app.use(express.json());
app.use("/", contactRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

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
