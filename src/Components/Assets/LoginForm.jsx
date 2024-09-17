import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  // Dropdown function inside the LoginForm component
  const Dropdown = () => {
    const [selectedRole, setSelectedRole] = useState('');

    const options = [
      { label: "Admin", value: 'username_password' },
      { label: "Teacher", value: 'username_id' },
      { label: "Student", value: 'username_id' },
      { label: "Parent", value: 'username_password' },
    ];

    function handleSelect(event) {
      setSelectedRole(event.target.value);
    }

    return (
      <div className="input-box">
        <div className='d-flex justify-content-end mt-5'>
          <div className='w-100 p-3 border rounded'>
            <h4>Select Role</h4>
            <select className='form-select' onChange={handleSelect}>
              {options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Conditional rendering based on selectedRole */}
        <div className="dynamic-input">
          {selectedRole.includes('username') && (
            <div className="input-box">
              <FaUser className="icon" />
              <input type="text" placeholder="Username" required />
            </div>
          )}
          {selectedRole.includes('password') && (
            <div className="input-box">
              <FaLock className="icon" />
              <input type="password" placeholder="Password" required />
            </div>
          )}
          {selectedRole.includes('id') && (
            <div className="input-box">
              <FaLock className="icon" />
              <input type="text" placeholder="ID" required />
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>

        {/* Dropdown component */}
        <Dropdown />

        {/* Submit button */}
        <button type="submit">Login</button>

        {/* Remember me and forgot password */}
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        {/* Register link */}
        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
