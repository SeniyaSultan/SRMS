import React, { useRef } from 'react';
import LoginForm from './Components/Assets/LoginForm'; // Adjust the path to point to LoginForm
import Profile from './Components/Assets/Profile'; // Corrected path
import profileImage from './Components/Assets/profile2.png'; // Import the image

function App() {
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click(); // Trigger a click on the hidden file input
  };

  const handleImageChange = () => {
    // Logic for handling image change (if needed)
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <LoginForm />
      </div>

      <div className="profile-container">
        <div 
          className="image-container"
          onClick={handleImageClick} 
          style={{ cursor: 'pointer' }}
        >
          <img src={profileImage} alt="Profile" className="profile-picture" />
        </div>
        <label className="upload-label">Upload Image</label>
        <input 
          type="file" 
          ref={inputRef} 
          onChange={handleImageChange}
          style={{ display: 'none' }} // Hide the file input
        />
        <Profile />
      </div>
    </div>
  );
}

export default App;
