import React from "react";
import "./BillCard.css";

const BillCard = props => (
  <div onClick={() => props.clickedFriend(props.name)} className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default BillCard;
