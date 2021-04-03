import React, { useState } from 'react';
import { ProfileStyles } from "./styles";
import ProfileImage from "../../assets/ProfileImage.png";
import {
  TiArrowDownOutline as ArrowDown,
  TiArrowUpOutline as ArrowUp
} from "react-icons/ti";
import { CgUserlane as BiographyIcon } from "react-icons/cg";
import { FiGithub as GithubGenesisIcon } from "react-icons/fi";
import { SiGithubactions as GitStatusIcon } from "react-icons/si";
import { AiOutlineAndroid as MyWorksIcon } from "react-icons/ai";
import { IoIosContact as ContactIcon } from "react-icons/io";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const OpenProfileModal =()=> {
    setIsOpen(isOpen=>!isOpen)
  }

  const profileData = [
    { icon: <GithubGenesisIcon />, name: "Github Genesis", url: "#" },
    { icon: <BiographyIcon />, name: "Short Biography", url: "#" },
    { icon: <GitStatusIcon />, name: "My Git Status", url: "#" },
    { icon: <MyWorksIcon />, name: "My Works", url: "#" },
    { icon: <ContactIcon />, name: "Contact", url: "#" },
  ];
  return (
    <ProfileStyles>
      <div className="imageContainer">
        <img src={ProfileImage} alt="profileimg" width="100%" height="100%" />
      </div>
      <div className="profileTextAndIcon" onClick={OpenProfileModal}>
        <b>About Me</b>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </div>
      <div className="profileContentContainer">
        {profileData.map(({icon,name,url }) => (
          <div className="profileContent">
            {icon}
            
          </div>
        ))}
      </div>
    </ProfileStyles>
  );
}

export default Profile;
