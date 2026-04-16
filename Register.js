import React, { useState } from "react";
import axios from "axios";

export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password
      });

      alert("Registration Successful ✅");

      // clear fields
      setName("");
      setEmail("");
      setPassword("");

    } catch (err) {
      alert("Registration Failed ❌");
      console.log(err);
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h2>Register</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegister} className="btn-main">
          Register
        </button>

      </div>
    </div>
  );
}