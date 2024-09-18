import React, { useRef, useState } from 'react';
import profileImage from './ParentProfile.png';
import './Profile.css';

const ProfileParent = () => {
  const [uploadedImage, setUploadedImage] = useState(profileImage);
  const inputRef = useRef(null);

  // Handle image click to open file input
  const handleImageClick = () => {
    inputRef.current.click();
  };

  // Handle image file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div
        className="image-container"
        onClick={handleImageClick}
        style={{ cursor: 'pointer' }}
      >
        <img src={uploadedImage} alt="Profile" className="profile-picture" />
      </div>
      <label className="upload-label">Upload Image</label>
      <label className="upload-label"style={{  fontWeight: 'bold', fontSize: '25px', color: '#3498db',  marginBottom: '20px'}}>Parent Profile page</label>

      <input
        type="file"
        ref={inputRef}
        onChange={handleImageChange}
        style={{ display: 'none' }}
        accept="image/*"
      />
      <form className="profile-form">
        <h2 className="profile-title">Manage Profile</h2>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" className="form-input" />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="username" className="form-input" />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" name="phone" className="form-input" />
        </div>
        <button type="submit" className="submit-button">Save</button>
      </form>
    </div>
  );
};

export default ProfileParent;
