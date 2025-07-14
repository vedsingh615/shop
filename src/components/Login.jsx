import React from 'react';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="logol">YoungFashion</h2>
        <form>
          <div className="input-group">
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-group">
            <input type="password" required />
            <label>Password</label>
          </div>
          <button type="submit" className="login-btn">Login</button>
          <p className="register-link">Don’t have an account? <a href="/register">Register</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
