import React, { useState, useEffect } from "react";
import Profile from "../profile";
import { HeaderStyles } from "./styles";

const Header = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    :
    const Interval = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      clearInterval(Interval);
    };
  }, []);
  return (
    <HeaderStyles>
      <div className="headerTitle">
        <h2>GitHub Genesis</h2>
      </div>
      <div className="timer">
        <b>
          Genesis Push: {timer} <span>Hours Ago </span>
        </b>
      </div>
      <Profile/>
    </HeaderStyles>
  );
};

export default Header;
