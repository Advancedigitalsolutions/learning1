require("dotenv/config");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/user", async (req, res) => {
  const response = await UserModal.find();
  console.log(response)
  res.status(200).send("user fetched successfully");
});

app.post("/user", (req, res) => {
  res.status(200).json({ "User created successfully": req.body });
});

app.patch("/user:id", (req, res) => {
  res.status(200).send("User updated successfully");
});

app.delete("/user:id", (req, res) => {
  res.status(200).send("User delete successfully");
});

const PORT = process.env.PORT || 3000; // creating the port for the deployment or can run on 8080 in local;

const server = app.listen(PORT, async () => {
  console.log(`App is running on port ${PORT}`);
});
module.exports = server
