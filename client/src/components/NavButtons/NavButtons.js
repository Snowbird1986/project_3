import React from "react";






// const NavButton = ({ children }) => (
//     <button

//         style={{
//             clear: "both",
//             margin: "10px",
//             padding: 20,
//             textAlign: "center",
//             color: "black",
//             fontFamily: '"News Cycle", "Arial Narrow Bold", sans-serif',

//         }}
//         className={children}
//     >
//         {children}
//     </button>

// );

const NavButton = props => (

    <button
        onClick={props.handleBtnClick}
        style={{
            clear: "both",
            margin: "10px",
            padding: 5,
            width: "100px",
            height: "240px",
            textAlign: "center",
            color: "black",
            fontFamily: '"News Cycle", sans-serif',
            fontSize: "10px",



        }}
        className={props.children}
    >
        {props.children}
    </button>

);


export default NavButton;
