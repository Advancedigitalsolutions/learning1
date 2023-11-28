const express = require("express");
const { User } = require("../model/user.model");
const User_router = express.Router()

User_router.get("/user", (req, res) => {
  res.status(200).send("user fetched api updated successfully");
});

User_router.post("/user", (req, res) => {
  const response = User();

    res.status(200).json({
      message: "User created successfully",
      data: response,
    });
});

User_router.put("/user/:id", (req, res) => {
  if (req.params.id !== "123") {
    return res.status(404).send("User not found");
  }
  res.status(200).send("User updated successfully");
});

User_router.delete("/user/:id", (req, res) => {
  if (req.params.id !== "123") {
    return res.status(404).send("User not found");
  }
  res.status(200).send("User delete successfully");
});

module.exports = User_router