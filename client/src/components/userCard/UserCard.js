import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./UserCard.css";

const UserCard = props => (
  
  <div className="card">
    <img className="img-container" class="card-img-top" src={props.img} alt={props.name} />
      <div className="card-head">

      </div>
      <div className="card-body">
          
      </div>
      <div className="card-nav">
        <button>Message</button>
      </div>
  </div>

);

export default UserCard;
