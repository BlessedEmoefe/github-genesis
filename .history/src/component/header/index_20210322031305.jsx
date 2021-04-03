import React, { useState, useEffect } from "react";
import { HeaderStyles } from "./styles";

const Header = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
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
          <f>My GitHub Genesis</f>
        </div>
        <div className="about">
          <p>My very first Git Push</p>
        </div>
        <div className="timer">
          <b>
            Genesis Push: {timer} <span>Hours Ago</span>
          </b>
        </div>
    </HeaderStyles>
  );
}

export default Header;
