import React, { useState } from "react";
import "../../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.trim() || !pwd.trim()) {
      alert("please fill the form");
      return;
    }
    setEmail("");
    setPwd("");
  };

  return (
    <div id="container">
      <form action="#" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
          type="email"
          id="email"
          className="email"
          email="email"
          placeholder="Enter your email please..."
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          value={pwd}
          onChange={(e) => {
            e.preventDefault();
            setPwd(e.target.value);
          }}
          type="pwd"
          email="pwd"
          id="pwd"
          className="pwd"
          placeholder="Enter your password please..."
        />
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
