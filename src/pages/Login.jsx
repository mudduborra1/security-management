import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/login.css";

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  // input change
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  // login submit
  const handleSubmit = (e) => {

    // ✅ stop form GET request
    e.preventDefault();

    if (
      form.username === "admin" &&
      form.password === "1234"
    ) {

      // save session
      localStorage.setItem("auth", "true");

      // redirect
      navigate("/dashboard", { replace:true })
      

    } else {

      alert("Invalid credentials");

    }
  };

  return (
    <div className="login-container">

      <div className="login-box">

        <h2>Security Login</h2>

        {/* ✅ FORM SUBMIT */}
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          {/* ✅ SUBMIT BUTTON */}
          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}