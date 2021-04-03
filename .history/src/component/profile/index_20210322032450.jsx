import React from 'react';
import { ProfileStyles } from "./styles";
import ProfileImage from "../../assets/ProfileImage.png"

const Profile = () => {
  return (
    <ProfileStyles>
      <div className="imageContainer">
      <img src={ProfileImage} alt="profile-image" width="/>
      </div>
    </ProfileStyles>
  )
}

export default Profile;
