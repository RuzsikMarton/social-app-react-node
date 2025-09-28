import { pool } from "../connect.js";
import jwt from "jsonwebtoken";

export const getPost = async (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in!");
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(403).json("Token is not valid!");
  }
  const q = `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) 
  LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId = ? OR p.userId = ? ORDER BY p.createdAt DESC`;
  try {
    const [posts] = await pool.query(q, [decoded.id, decoded.id]);
    res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json("Internal server error");
  }
};
