require("dotenv/config");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(cors());

app.get("/user", (req, res) => {
  res.status(200).send("user fetched api updated successfully");
});

app.post("/user", (req, res) => {
  res.status(200).json({ message:"User created successfully", data: req.body });
});

app.put("/user/:id", (req, res) => {
  if (req.params.id !== "123") {
    return res.status(404).send("User not found");
  }
  res.status(200).send("User updated successfully");
});

app.delete("/user/:id", (req, res) => {
  if(req.params.id !== "123"){
    return res.status(404).send("User not found");
  }
  res.status(200).send("User delete successfully");
});

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, async () => {
  console.log(`App is running on port ${PORT}`);
});

module.exports = server;