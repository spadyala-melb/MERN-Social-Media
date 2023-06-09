import mongoose from "mongoose";
import Post from "../models/postModel.js";
import User from "../models/userModel.js";

//  get a post
export const getPost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "No such post" });
  }

  const post = await Post.findById(id);
  if (!post) {
    return res.status(400).json({ msg: "No such post" });
  }
  res.status(200).json(post);
};

// Create
export const createPost = async (req, res) => {
  let post;
  try {
    post = await Post.create(req.body);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
  res.status(200).json(post);
};

// delete
export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "No such post" });
  }

  const post = await Post.findByIdAndDelete(id);
  if (!post) {
    return res.status(400).json({ msg: "No such post" });
  }
  res.status(200).json(post);
};

// update
export const updatePost = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: "No such post" });
    }

    if (req.body.userId !== id) {
      return res.status(403).json({ error: "You can only update your posts" });
    }

    const post = await Post.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    if (!post) {
      return res.status(400).json({ msg: "No such post" });
    }

    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred" });
  }
};

// Timeline posts
export const getTimelinePosts = async (req, res) => {
  try {
    const { id } = req.params;
    const currentUser = await User.findById(id);
    const currentUserPosts = await Post.find({ userId: currentUser._id }).sort({
      createdAt: -1,
    });

    const followingIds = currentUser.followings;
    const followingsPosts = await Post.find({
      userId: { $in: followingIds },
    }).sort({ createdAt: -1 });
    const posts = currentUserPosts.concat(followingsPosts);
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Like or dislike a post
export const likePost = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: "No such post" });
    }
    // get the post owner id
    const { userId: postOwnerId } = await Post.findById(id);

    const post = await Post.findByIdAndUpdate(id, {
      $push: { likes: req.body.userId },
    });

    if (!post) {
      console.log("No such post");
      return res.status(400).json({ msg: "No such post" });
    }

    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred" });
  }
};

// get posts of a particular user
export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await Post.find({ userId: userId }).sort({
      createdAt: -1,
    });
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
