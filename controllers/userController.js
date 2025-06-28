// Minimal REST API: User Registration and Login (no auth), Product CRUD
// Edits to match assignment requirements

import User from "../model/user.js";
import jwt from "jsonwebtoken"; // Not used for this assignment (no auth required)
import bcrypt from "bcrypt"; // Optional since auth is not required, but kept for best practice
import dotenv from "dotenv";

dotenv.config();

// REGISTER USER (NO AUTH)
export async function postUsers(req, res) {
  try {
    const { email, firstname, lastname, password, wPhone } = req.body;

    if (!email || !firstname || !lastname || !password || !wPhone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      firstname,
      lastname,
      password: passwordHash,
      wPhone,
      emailVerified: false,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
}

// LOGIN USER (NO AUTH REQUIRED)
export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    res.json({
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
}
