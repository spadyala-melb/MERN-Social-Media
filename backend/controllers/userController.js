import mongoose from "mongoose";
import User from "../models/userModel.js";
import {
  getHashed,
  comparePasswords,
  createToken,
} from "../utils/securityUtils.js";

// Register
export const registerUser = async (req, res) => {
  const { username, password, email } = req.body;

  const exists = await User.findOne({ email: email });
  if (exists) {
    return res.status(400).json({ msg: "User already exists" });
  }

  const hashedPassword = await getHashed(password);
  const user = await User.create({ username, email, password: hashedPassword });

  res.status(200).json(user);
};

// Login
export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ msg: "Incorrect username" });
  }
  const match = await comparePasswords(password, user.password);
  if (!match) {
    return res.status(400).json({ msg: "Incorrect password" });
  }

  res.status(200).json({ msg: "User login successful" });
};

// update
export const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "No such user" });
  }

  if (req.body.userId === id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        req.body.password = getHashed(req.body.password);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
    const user = await User.findOneAndUpdate({ _id: id }, { $set: req.body });
    if (!user) {
      return res.status(400).json({ msg: "No such user" });
    }
    res.status(200).json(user);
  } else {
    res.status(403).json({ error: "You can update only your account" });
  }
};

// delete
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "No such user" });
  }

  if (req.body.userId === id || req.body.isAdmin) {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(400).json({ msg: "No such user" });
    }
    res.status(200).json(user);
  } else {
    res.status(403).json({ error: "You can update only your account" });
  }
};

// get a single user
export const getUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "No such user" });
  }

  const user = await User.findById(id);
  if (!user) {
    return res.status(400).json({ msg: "No such user" });
  }
  res.status(200).json(user);
};

// follow
export const followUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "No such user" });
  }

  if (req.body.userId === id) {
    return res
      .status(403)
      .json({ error: "You cannot follow your own account" });
  }

  const user = await User.findByIdAndUpdate(id, {
    $push: { followers: req.body.userId },
  });
  if (!user) {
    return res.status(400).json({ msg: "No such user" });
  }
  const currentUser = await User.findByIdAndUpdate(req.body.userId, {
    $push: { followings: id },
  });
  res.status(200).json(currentUser);
};

// unfollow
export const unfollowUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "No such user" });
  }

  if (req.body.userId === id) {
    return res
      .status(403)
      .json({ error: "You cannot follow your own account" });
  }

  const user = await User.findByIdAndUpdate(id, {
    $pull: { followers: req.body.userId },
  });
  if (!user) {
    return res.status(400).json({ msg: "No such user" });
  }
  const currentUser = await User.findByIdAndUpdate(req.body.userId, {
    $pull: { followings: id },
  });
  res.status(200).json(currentUser);
};
