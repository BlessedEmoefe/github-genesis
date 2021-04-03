import React from "react";
import { FooterStyles } from "./styles";
import {
  FiYoutube as Youtube,
  FiTwitter as Twitter,
  FiLinkedin as LinkedIn,
  FiInstagram as Instagram,
} from "react-icons/fi";

const Footer = () => {
  const socialData = [
    { name: "twitter", icon: <Twitter />, url: "#" },
    { name: "linkedIn", icon: <LinkedIn />, url: "#" },
    { name: "instagram", icon: <Instagram />, url: "#" },
    { name: "instagram", icon: <Instagram />, url: "#" },
    { name: "instagram", icon: <Instagram />, url: "#" },
    { name: "youtube", icon: <Youtube />, url: "#" },
  ];
  return (
    <FooterStyles>
      <div className="copyright">
        <small>Copyright© Blessed Emoefe Onoriode 2019</small>
      </div>
      <div className="socialMedia">
        {socialData.map(({ name, icon, url }) => (
          <div className="socialcontainer" name={name}>{icon}</div>
        ))}
      </div>
    </FooterStyles>
  );
};

export default Footer;
