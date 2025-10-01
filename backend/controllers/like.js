import { pool } from "../connect.js";
import jwt from "jsonwebtoken";

export const getLikes = async (req, res) => {
  const q = `SELECT userId FROM likes WHERE postId = ?`;
  try {
    const [likes] = await pool.query(q, [req.query.postId]);
    res.status(200).json(likes.map((like) => like.userId));
  } catch (err) {
    return res.status(500).json("Internal server error");
  }
};

export const addLike = async (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in!");
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(403).json("Token is not valid!");
  }
  const q = "INSERT INTO likes (`userId`,`postId`) VALUES (?,?)";
  try {
    await pool.query(q, [decoded.id, req.body.postId]);
    res.status(200).json("Post has been liked");
  } catch (err) {
    console.error(err);
    return res.status(500).json("Internal server error");
  }
};

export const deleteLike = async (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in!");
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(403).json("Token is not valid!");
  }
  const q = "DELETE FROM likes WHERE `userId` = ? AND `postId` = ?";
  try {
    await pool.query(q, [decoded.id, req.query.postId]);
    res.status(200).json("Like has been removed");
  } catch (err) {
    console.error(err);
    return res.status(500).json("Internal server error");
  }
};
