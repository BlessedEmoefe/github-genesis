import React, { useState, useEffect } from "react";
import { HomeStyles } from "./styles";

const Home = () => {
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
    <HomeStyles>
      <div className="header">
        <div className="headerTitle">
          <h1>My GitHub Genesis</h1>
        </div>
        <div className="About">
          <h5>{timer}</h5>
        </div>
        <div className="timer">
          <p>Genesis Push:{ timer} <span>Ago</span></p>
        </div>
      </div>
    </HomeStyles>
  );
};

export default Home;
