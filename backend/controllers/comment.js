import { pool } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getComments = async (req, res) => {
  const q = `SELECT c.*, u.id AS userId, name, profilePic FROM comments AS c JOIN users AS u ON (u.id = c.userId) 
  WHERE c.postId = ? ORDER BY c.createdAt DESC`;
  try {
    const [comments] = await pool.query(q, [req.query.postId]);
    res.status(200).json(comments);
  } catch (err) {
    return res.status(500).json("Internal server error");
  }
};

export const addComment = async (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in!");
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(403).json("Token is not valid!");
  }
  const q =
    "INSERT INTO comments (`desc`,`createdAt`,`userId`, postId) VALUES (?,?,?,?)";
  try {
    await pool.query(q, [
      req.body.desc,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      decoded.id,
      req.body.postId,
    ]);
    res.status(200).json("Comment has been created");
  } catch (err) {
    console.error(err);
    return res.status(500).json("Internal server error");
  }
};
