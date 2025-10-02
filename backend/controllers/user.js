import { pool } from "../connect.js";
import jwt from "jsonwebtoken";

export const getUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const q = "SELECT * FROM users WHERE id=?";
    const [user] = await pool.query(q, [userId]);
    const { password, ...info } = user;
    return res.status(200).json(info);
  } catch (err) {
    console.err(err);
    return res.status(500).json("Internal server error!");
  }
};

export const updateUser = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(403).json("Token is not valid!");
  }
  try {
    const q =
      "UPDATE users SET `name`=?, `city`=?, `language`=?, `profilePic`=?, `coverPic`=? WHERE id=?";
    const values = [
      req.body.name,
      req.body.city,
      req.body.language,
      req.body.profilePic,
      req.body.coverPic,
      decoded.id,
    ];
    const [result] = await pool.query(q, values);
    if (result.affectedRows > 0) {
      return res.status(200).json("User has been updated.");
    } else {
      return res.status(403).json("You can update only your profile!");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json("Internal server error!");
  }
};
