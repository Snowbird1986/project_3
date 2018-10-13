import React from "react";
import "./BillUserCard.css";

const BillUserCard = props => (
  // console.log(props)&
  <option value={`${props.firstName} ${props.lastName}`}>{props.firstName} {props.lastName}</option>
  // <div onClick={() => props.clickedFriend(props.name)} className="card">
  //   <div className="img-container">
  //     <img alt={props.name} src={props.image} />
  //   </div>
  // </div>
);

export default BillUserCard;
