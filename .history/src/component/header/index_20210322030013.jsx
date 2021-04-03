import React from 'react';
import { HeaderStyles } from "./styles";

const Header = () => {
  return (
    <HeaderStyles>
      Hello World
      <div className="header">
        <div className="headerTitle">
          <h1>My GitHub Genesis</h1>
        </div>
        <div className="about">
          <p>My very first Git Push</p>
        </div>
        <div className="timer">
          <b>
            Genesis Push: {timer} <span>Hours Ago</span>
          </b>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;
