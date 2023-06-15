const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: "Sign up successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sign up failed" });
  }
});

module.exports = router;
