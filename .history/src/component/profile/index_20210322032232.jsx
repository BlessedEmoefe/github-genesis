import React from 'react';
import { ProfileStyles } from "./styles";
import ProfileImage from "../../assets/ProfileImage.png"

const Profile = () => {
  return (
    <ProfileStyles>
      <div></div>
      <img src={ProfileImage} alt="profile-image"/>
    </ProfileStyles>
  )
}

export default Profile;
