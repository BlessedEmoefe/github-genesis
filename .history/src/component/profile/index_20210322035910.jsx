import React,{useState} from 'react';
import { ProfileStyles } from "./styles";
import ProfileImage from "../../assets/ProfileImage.png";
import {TiArrowDownOutline as ArrowDown} from "react-icons/ti"

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const OpenProfileModal = 
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
        {}
      </div>
    </ProfileStyles>
  );
}

export default Profile;
