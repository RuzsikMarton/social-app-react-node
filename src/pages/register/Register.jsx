import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useRegister";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);
  const { mutate } = useRegister();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(null);
    if (!inputs.username || !inputs.email || !inputs.password || !inputs.name) {
      setErr("All fields are required.");
      return;
    }

    mutate(inputs, {
      onSuccess: () => {
        navigate("/login");
      },
      onError: (err) => {
        const msg =
          err?.response?.data && typeof err.response.data === "string"
            ? err.response.data
            : "Something went wrong. Please try again.";
        setErr(msg);
      },
    });
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            {err ? <span className="text-red-500">{err}</span> : <></>}
            <button onClick={handleSubmit}>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Social React App</h1>
          <p>This is the registration page for the Social React App.</p>
          <span>Do you have an account?</span>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
