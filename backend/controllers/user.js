import { pool } from "../connect.js";

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
