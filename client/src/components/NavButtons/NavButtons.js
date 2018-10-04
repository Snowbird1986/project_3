import React from "react";

const NavButton = ({ children }) => (
    <button
        //style={{ height: 100, clear: "both", paddingTop: 20, textAlign: "center" }}
        style={{
            clear: "both",
            margin: "10px",
            padding: 20,
            textAlign: "center",
            color: "black",
            fontFamily: '"News Cycle", "Arial Narrow Bold", sans-serif'
        }}
        className={children}
    >
        {children}
    </button>
    //<button>{btnName}</button>
);


export default NavButton;
