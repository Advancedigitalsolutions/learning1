require("dotenv/config");
const express = require("express");
const cors = require("cors");
const router = require("./controllers/user.controllers");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", router);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, async () => {
  console.log(`App is running on port ${PORT}`);
});

module.exports = server;
