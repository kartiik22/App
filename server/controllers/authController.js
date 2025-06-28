const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Signup function: Creates a new user
const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Hash password before saving to database
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword });

    res.json({ message: "User created" }); // Success response
  } catch (error) {
    res.status(400).json({ error: "User already exists" }); // Error if email is taken
  }
};

// Login function: Authenticates user and returns JWT
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }); // Find user by email
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" }); // Invalid email or password
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token }); // Return token
  } catch (error) {
    res.status(500).json({ error: "Server error" }); // Internal server error
  }
};

module.exports = { signup, login }; // Export functions
