require("dotenv/config");
const express = require("express");
const cors = require("cors");
const app = express(); // creating the app with the express function;

app.use(express.urlencoded({ extended: true })); // used urlencided middleware from the express
app.use(express.json()); // using the express.json() middleware to make streaming request ans response
app.use(cors()); //using cors middleware which is allowing the origin to make request and get response

app.get("/user", (req, res) => {
  console.log(whoami);
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
app.listen(PORT, async () => {
  console.log(`App is running on port ${PORT}`);
});
