import React,{useState} from 'react';
import { ProfileStyles } from "./styles";
import ProfileImage from "../../assets/ProfileImage.png";
import { TiArrowDownOutline as ArrowDown } from "react-icons/ti";
i

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const OpenProfileModal =()=> {
    setIsOpen(isOpen=!isOpen)
  }
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
        {isOpen?<ArrowUp />:<ArrowDown />}
      </div>
    </ProfileStyles>
  );
}

export default Profile;
