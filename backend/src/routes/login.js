
const express = require("express");
const router = express.Router();
const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const config = require("config");

//terminating the process if the towken is not set
if (!config.get("jwtsec")) {
  console.log("FATAL ERROR: jwtsec is not defined");
  process.exit(1);
}

//Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email and password are required." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: "Invalid password." });
    }
    const token = user.genAuthToken({ expiresIn: "10"});
   
    res.status(200).json({
      message: "Login successful",
      token: token,
      user: {
        name: user.name,
        email: user.email,
        role: user.userRole
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
