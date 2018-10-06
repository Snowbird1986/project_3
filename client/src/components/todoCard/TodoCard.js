import React from "react";
import "./TodoCard.css";

const TodoCard = props => (
  <div onClick={() => props.clickedFriend(props.name)} className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default TodoCard;
