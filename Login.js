import React, { useState } from "react";
import axios from "axios";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      })

      alert(`Login successful, welcome ${res.data.user.name}`)
      setEmail("")
      setPassword("")
    } catch (err) {
      const message = err?.response?.data?.error || "Login failed"
      alert(message)
      console.error(err)
    }
  }

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f5f5f5"
    }}>

      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "10px",
        width: "300px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>

        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Login
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px"
          }}
        />

        <button onClick={handleLogin} style={{
          width: "100%",
          padding: "10px",
          background: "#ff4d4d",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}>
          Login
        </button>

      </div>
    </div>
  );
}