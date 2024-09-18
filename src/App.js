import React from 'react';
import LoginForm from './Components/Assets/LoginForm'; // Adjust the path to point to LoginForm
import Profile from './Components/Assets/Profile'; // Corrected path
import ProfileParent from './Components/Assets/ProfileParent'; // Parent profile page
import ProfileTeacher from './Components/Assets/ProfileTeacher'; // Teacher profile page
import ProfileStudent from './Components/Assets/ProfileStudent'; // Student profile page

function App() {
  return (
    <div className="app-container">
      <div className="form-container">
        <LoginForm />
      </div>

      <div className="profile-container">
        <Profile />
        <ProfileParent />
        <ProfileStudent />
        <ProfileTeacher />
      </div>
    </div>
  );
}

export default App;
