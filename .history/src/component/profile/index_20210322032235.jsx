import React from 'react';
import { ProfileStyles } from "./styles";
import ProfileImage from "../../assets/ProfileImage.png"

const Profile = () => {
  return (
    <ProfileStyles>
      <div>

      <img src={ProfileImage} alt="profile-image"/>
      </div>
    </ProfileStyles>
  )
}

export default Profile;
