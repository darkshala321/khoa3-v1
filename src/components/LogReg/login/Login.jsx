import axios from "axios";
import React, { useState, useEffect } from "react";
import "./login.css";

async function loginUser(credentials) {
  return fetch('http://103.39.125.47:3000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

function Login({ setToken}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    loginUser(data).then((data) => {
      setToken(data.token);
    });
  };

  // useEffect(() => {
  //   if (token) {
  //     axios
  //       .get("http://103.39.125.47:3000/auth/token", {
  //         headers: { Authorization: `Bearer ${token}` },
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [token]);

  return (
    <div className="login-container">
      <div className="loginform">
        <h2>Đăng nhập tài khoản</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Tên tài khoản hoặc Email</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Đăng nhập
          </button>
        </form>
        <div className="or-separator">Hoặc</div>
        <div className="social-login">
          <button className="google-button">Đăng nhập bằng Google</button>
          <button className="facebook-button">Đăng nhập bằng Facebook</button>
          <button className="apple-button">Log in with Apple</button>
        </div>
        <div className="signup-link">
          Chưa có tài khoản? <a href="./register/Register">Đăng ký</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
