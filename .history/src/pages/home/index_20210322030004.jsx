import React, { useState, useEffect } from "react";
import Header from "../../component/header";
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
     <Header
    </HomeStyles>
  );
};

export default Home;
