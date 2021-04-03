import React from 'react';
import { ProfileStyles } from "./styles";
import ProfileImage from "../../assets/ProfileImage.png";
import {TiArrowDownOutline as arrow}

const Profile = () => {
  return (
    <ProfileStyles>
      <div className="imageContainer">
        <img
          src={ProfileImage}
          alt="profile-image"
          width="100%"
          height="100%"
        />
      </div>
      <div className="profileTextAndIcon">
        <b>About Me</b>
        
      </div>
    </ProfileStyles>
  );
}

export default Profile;
