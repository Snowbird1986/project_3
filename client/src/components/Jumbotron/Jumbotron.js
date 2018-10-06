import React from "react";

import "./Jumb.css";


const Jumbotron = ({ children }) => (
  <div
    style={{
      height: 300,
      width: "100%",
      clear: "both",
      paddingTop: 120,
      textAlign: "center",
      backgroundImage: 'url("images/LandingImage.png")',
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%"


    }}
    className="jumbotron"
  >

    <h1
      style={{
        color: "white",
        fontSize: 50,
        textShadow: "3px 3px 5px black"

      }}
    >{children}</h1>
  </div>
);

export default Jumbotron;
