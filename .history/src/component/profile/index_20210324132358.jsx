import React,{useState} from 'react';
import { ProfileStyles } from "./styles";
import ProfileImage from "../../assets/ProfileImage.png";
import {
  TiArrowDownOutline as ArrowDown,
  TiArrowUpOutline as ArrowUp
} from "react-icons/ti";


const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const OpenProfileModal =()=> {
    setIsOpen(isOpen=>!isOpen)
  }
  return (
    <ProfileStyles>
      <div className="imageContainer">
        <img src={ProfileImage} alt="profileimg" width="100%" height="100%" />
      </div>
      <div className="profileTextAndIcon" onClick={OpenProfileModal}>
        <b>About Me</b>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </div>
      <div className="profileContentContainer"></div>
    </ProfileStyles>
  );
}

export default Profile;
