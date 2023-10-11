const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { secretKey } = require("../config");

router.post("/login", async (req, res) => {
  const { adminID, adminPassword } = req.body;
  const defaultAdminID = "admin";
  const defaultAdminPassword = "adminpassword";

  try {
    if (adminID === defaultAdminID && adminPassword === defaultAdminPassword) {
      const token = jwt.sign({ adminID: defaultAdminID }, secretKey, {
        expiresIn: "1h",
      });

      return res
        .status(200)
        .json({ token, message: "Admin logged in successfully" });
    }
    const admin = await Admin.findOne({ adminID });

    if (!admin) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(
      adminPassword,
      admin.adminPassword
    );

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ adminID: admin.adminID }, secretKey, {
      expiresIn: "1h",
    });

    res.status(200).json({ token, message: "Admin logged in successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Login failed" });
  }
});

router.post("/register", async (req, res) => {
  const { adminID, adminPassword } = req.body;

  try {
    const existingAdmin = await Admin.findOne({ adminID });

    if (existingAdmin) {
      return res.status(400).json({ error: "Admin already exists" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(adminPassword, saltRounds);

    const admin = new Admin({ adminID, adminPassword: hashedPassword });
    await admin.save();

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Registration failed" });
  }
});
router.get("/users", async (req, res) => {
  try {
    const adminUsers = await Admin.find({});

    res.status(200).json(adminUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve admin users" });
  }
});

router.delete("/users/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const totalAdminUsers = await Admin.countDocuments();

    if (totalAdminUsers <= 1) {
      return res
        .status(400)
        .json({ error: "Cannot delete the last admin user." });
    }
    await Admin.findByIdAndRemove(userId);

    res.status(200).json({ message: "Admin user deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete admin user" });
  }
});

module.exports = router;
