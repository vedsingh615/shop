import React from 'react';

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="logo2">YoungFashion</h2>
        <form>
          <div className="input-group">
            <input type="text" required />
            <label>Full Name</label>
          </div>
          <div className="input-group">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-group">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="input-group">
            <input type="password" required />
            <label>Confirm Password</label>
          </div>
          <button type="submit" className="register-btn">Register</button>
          <p className="login-link">Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
