import React from "react";
import Body from "../../component/body";
import Footer from "../../component/footer";
import Header from "../../component/header";
import { HomeStyles } from "./styles";

const Home = () => {

  return (
    <HomeStyles>
      <Header />
      <Body />
      <Footer />
    </HomeStyles>
  );
};

export default Home;
