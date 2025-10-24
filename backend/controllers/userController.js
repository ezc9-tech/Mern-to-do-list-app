import User from "../models/userModel.js";

export async function createUser(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }
    const existing = await User.findOne({ username });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new User({ username, password });
    await newUser.save();
    req.session.userId = newUser._id;
    res.status(201).json({
      message: "User created and logged in",
      user: { id: newUser._id, username: newUser.username },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could not create user", error: error.message });
  }
}

export async function loginUser(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    if (user.password !== password) {
      return res.status(400).json({ message: "Users password is incorrect" });
    }
    req.session.userId = user._id;
    res.status(200).json({
      message: "User logged in",
      user: { id: user._id, username: user.username },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could not log in user", error: error.message });
  }
}

export function logoutUser(req, res) {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Could not log out user" });
    }
    res.clearCookie("connect.sid");
    res.status(200).json({ message: "User logged out successfully" });
  });
}

export function getCurrentUser(req, res) {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  res.status(200).json({ userId: req.session.userId });
}

