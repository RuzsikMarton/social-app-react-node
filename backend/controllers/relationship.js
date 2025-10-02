import { pool } from "../connect.js";
import jwt from "jsonwebtoken";

export const getRelationships = async (req, res) => {
  const q = `SELECT followerUserId FROM relationships WHERE followedUserId = ?`;
  try {
    const [relationships] = await pool.query(q, [req.query.followedUserId]);
    res.status(200).json(relationships.map((relationship) => relationship.followerUserId));
  } catch (err) {
    return res.status(500).json("Internal server error");
  }
};

export const addRelationship = async (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in!");
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(403).json("Token is not valid!");
  }
  const q = "INSERT INTO relationships (`followerUserId`,`followedUserId`) VALUES (?,?)";
  try {
    await pool.query(q, [decoded.id, req.body.followedUserId]);
    res.status(200).json("Followed the user");
  } catch (err) {
    console.error(err);
    return res.status(500).json("Internal server error");
  }
};

export const deleteRelationship = async (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in!");
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(403).json("Token is not valid!");
  }
  const q = "DELETE FROM relationships WHERE `followerUserId` = ? AND `followedUserId` = ?";
  try {
    await pool.query(q, [decoded.id, req.query.followedUserId]);
    res.status(200).json("Unfollowed the user");
  } catch (err) {
    console.error(err);
    return res.status(500).json("Internal server error");
  }
};
