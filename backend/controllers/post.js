import { pool } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getPost = async (req, res) => {
  const token = req.cookies.accessToken;
  const userId = req.query.userId;

  if (!token) return res.status(401).json("Not logged in!");
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(403).json("Token is not valid!");
  }
  const q = userId
    ? `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE p.userId = ? ORDER BY p.createdAt DESC`
    : `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) 
  LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId = ? OR p.userId = ? ORDER BY p.createdAt DESC`;
  
  try {
    const values = userId ? [userId] : [decoded.id, decoded.id];
    const [posts] = await pool.query(q, values);
    res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json("Internal server error");
  }
};

export const addPost = async (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in!");
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(403).json("Token is not valid!");
  }
  const q =
    "INSERT INTO posts (`desc`,`img`,`createdAt`,`userId`) VALUES (?,?,?,?)";
  try {
    const [post] = await pool.query(q, [
      req.body.desc,
      req.body.img,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      decoded.id,
    ]);
    res.status(200).json("Post has been created");
  } catch (err) {
    console.error(err);
    return res.status(500).json("Internal server error");
  }
};

export const deletePost = async (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in!");
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(403).json("Token is not valid!");
  }

  try {
    await pool.query("START TRANSACTION");

    const checkQ = "SELECT id FROM posts WHERE id = ? AND userId = ?";
    const [postCheck] = await pool.query(checkQ, [req.params.id, decoded.id]);
    
    if (postCheck.length === 0) {
      await pool.query("ROLLBACK");
      return res.status(403).json("You can delete only your post!");
    }
    // Delete comments
    const deleteCommentsQ = "DELETE FROM comments WHERE postId = ?";
    await pool.query(deleteCommentsQ, [req.params.id]);

    // Delete likes
    const deleteLikesQ = "DELETE FROM likes WHERE postId = ?";
    await pool.query(deleteLikesQ, [req.params.id]);

    // Delete the post
    const deletePostQ = "DELETE FROM posts WHERE id = ? AND userId = ?";
    await pool.query(deletePostQ, [req.params.id, decoded.id]);
    await pool.query("COMMIT");
    
    res.status(200).json("Post and all related data have been deleted");
  } catch (err) {
    await pool.query("ROLLBACK");
    console.error(err);
    return res.status(500).json("Internal server error");
  }
};
