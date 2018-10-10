import React from "react";
import "./RoomCard.css";

const RoomCard = props => (
  // props.clickedFriend(props.name)
  <div onClick={() => console.log(props)} className="card">

    <div className="img-container">

      {/* <img alt={props.name} src={props.image} /> */}
      <img src={this.props} />
    </div>
  </div>
);

export default RoomCard;
