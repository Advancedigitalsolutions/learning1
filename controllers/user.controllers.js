const express = require("express");
const { User } = require("../Model/user.model");
const router = express.Router()

router.get("/user", (req, res) => {
  res.status(200).send("user fetched api updated successfully");
});

router.post("/user", (req, res) => {
  const response = User();

    res.status(200).json({
      message: "User created successfully",
      data: response,
    });
});

router.put("/user/:id", (req, res) => {
  if (req.params.id !== "123") {
    return res.status(404).send("User not found");
  }
  res.status(200).send("User updated successfully");
});

router.delete("/user/:id", (req, res) => {
  if (req.params.id !== "123") {
    return res.status(404).send("User not found");
  }
  res.status(200).send("User delete successfully");
});

module.exports = router