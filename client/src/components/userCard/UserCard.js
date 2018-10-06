import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./UserCard.css";

const UserCard = props => (
  // <div onClick={() => props.clickedFriend(props.name)} className="card">
  <div className="col-md-12">
    <Row>
      <div className="col-md-2 img-container" id="userImage">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="col-md-10" id="userImage">
        <Row>
          <h1>Name: {props.name}</h1>
        </Row>
        <Row>
          <h2>Location: {props.city}, {props.state} {props.zip}</h2>
        </Row>
      </div>
      <div className="col-md-12">
        <div>
          <p>{props.introduction}</p>
        </div>
      </div>
    </Row>
  </div>
);

export default UserCard;
