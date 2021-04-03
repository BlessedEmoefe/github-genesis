import React,{useState} from 'react';
import { ProfileStyles } from "./styles";
import ProfileImage from "../../assets/ProfileImage.png";
import {
  TiArrowDownOutline as ArrowDown,
  TiArrowUpOutline as ArrowUp
} from "react-icons/ti";
import { CgUserlane as BiographyIcon } from "react-icons/cg";
import { FiGithub as GithubGenesisIcon } from "react-icons/fi";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const OpenProfileModal =()=> {
    setIsOpen(isOpen=>!isOpen)
  }

  const profiledata = [
    { icon: <GithubGenesisIcon />, name: "Github Genesis", url: "#" },
    { icon: <BiographyIcon />, name: "Short Biography", url: "#" },
    { icon: <UserIcon />, name: "My Git Status", url: "#" },
    { icon: <UserIcon />, name: "Contac", url: "#" },
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
        <div className=""></div>
      </div>
    </ProfileStyles>
  );
}

export default Profile;
