import React from "react";
import { FooterStyles } from "./styles";
import {
  FiFacebook as Facebook,
  FiTwitter as Twitter,
  FiLinkedin as LinkedIn,
  FiInstagram as Instagram
} from "react-icons/fi";

const Footer = () => {
  const Socials = [
    { name: "facebook", icon: <Facebook />, url: "#" },
    { name: "twitter", icon: <Twitter />, url: "" },
    { name: "linkedIn", icon: <LinkedIn />, url: "" },
    { name: "instagram", icon: <Instagram />, url: "" },
  ];
  return (
    <FooterStyles>
      <div className="copyright">
        <small>copyright Blessed Emoefe Onoriode 2019</small>
      </div>
      <div className="socialMedia">
        {Socials.map((social) => (
          <div className="socialcontainer">
            {social}
          </div>
        ))}
      </div>
    </FooterStyles>
  );
};

export default Footer;
