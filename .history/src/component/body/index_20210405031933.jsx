import React from "react";
import { BodyStyles } from "./styles";

const Body = () => {
  return (
    <BodyStyles>
      <div className="bodyContainer">
        <div className="section1">Hello World</div>
        <div className="section2">It's Our First</div>
        <div className="section3">Projistry</div>
        <div className="section4">
          <b>Updates Coming Soon</b>git
        </div>
      </div>
    </BodyStyles>
  );
};

export default Body;
