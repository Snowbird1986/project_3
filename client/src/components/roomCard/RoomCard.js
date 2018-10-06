import React from "react";
import "./RoomCard.css";

const RoomCard = props => (
  <div onClick={() => props.clickedFriend(props.name)} className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default RoomCard;
