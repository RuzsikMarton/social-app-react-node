import { db, pool } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password, name } = req.body;
  try {
    const select = "SELECT * FROM users WHERE username = ?";
    const [existing] = await pool.query(select, [username]);
    if (existing.length) {
      return res.status(409).json("User already exists!");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const insert =
      "INSERT INTO users (`username`,`email`,`password`,`name`) VALUES (?)";
    await pool.query(insert, [[username, email, hashedPassword, name]]);

    return res.status(201).json("User has been created");
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(409).json("User already exists!");
    }
    console.error("Register error:", err);
    return res.status(500).json("Internal server error");
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  const q = "SELECT * FROM users WHERE username = ? LIMIT 1";

  try {
    const [user] = await pool.query(q, [username]);
    const AUTH_FAIL = () => res.status(401).json("Invalid credentials");
    if (user.length === 0) return AUTH_FAIL();

    const ok = await bcrypt.compare(password || '', user[0].password);
    if (!ok) return AUTH_FAIL();

    const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET);

    const { password: _pw, ...safeUser } = user[0];

    res
      .cookie("accessToken", token, { httpOnly: true })
      .status(200)
      .json(safeUser);
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json("Internal server error");
  }
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been logged out");
};
