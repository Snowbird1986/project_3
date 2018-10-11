import React, { Component } from "react";
import "./RoomCard.css";
class RoomCard extends Component {
  state = {
    userArray: ["user1", "user2", "user3", "user4", "user5"]


  };
  picSize = (userArray) => {
    const boxWidth = 230 / userArray.length;
    const boxHeight = boxWidth;
    return [boxWidth, boxHeight];

  };

  render() {

    const dims = this.picSize(this.state.userArray);
    return (
      <div onClick={() => console.log(this.props)} className="card">

        <div className="img-container">
          <div style={{
            backgroundColor: "Black",
            width: "100%",
            height: "40px"

          }}>
            <h1 style={{
              color: "white",
              fontSize: "21px"
            }}>
              4 person occupancy : 1 vacancy
            </h1>
          </div>
          {this.state.userArray.map((user, idx) => <div style={{
            margin: "10px",
            width: `${dims[0]}px`,
            height: `${dims[1]}px`,
            float: "left",
            backgroundColor: "white"
          }} key={`img-${idx}`} />)}
          {/* <div style={{
            margin: "10px",
            width: "40px",
            height: "40px",
            backgroundColor: "white"
          }}>

          </div> */}

          {/* <img alt={props.name} src={props.image} /> */}
          {/* <img src={this.props.img} /> */}
        </div>
      </div>
    )
  }
}
export default RoomCard;
