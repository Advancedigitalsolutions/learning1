require("dotenv/config");
const express = require("express");
const cors = require("cors");
const User_router = require("./controllers/User.controllers");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", User_router);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, async () => {
  console.log(`App is running on port ${PORT}`);
});

module.exports = server;
