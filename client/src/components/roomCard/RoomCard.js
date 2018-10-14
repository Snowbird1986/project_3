import React, { Component } from "react";
import "./RoomCard.css";
class RoomCard extends Component {
  componentDidMount = () => {
  }

  state = {
    userArray: this.props.children

  };
  picSize = (userArray) => {
    const boxWidth = 230 / userArray.length;
    const boxHeight = boxWidth;
    return [boxWidth, boxHeight];

  };


  render() {
    console.log(this.props.children[0].openSpots)
    const spots = this.props.children[0].openSpots;
    const myRooms = this.props.children[0].rooms;
    const roomsWithAvailable = [];
    const makeLoop = (myRooms) => {
      roomsWithAvailable.push(Array.apply(null, Array(Number(spots))))
      return roomsWithAvailable
    }
    makeLoop()

    console.log(roomsWithAvailable[0])
    const dims = this.picSize(roomsWithAvailable[0]);
    return (
      <div onClick={() => console.log("")} className="card">

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
              4 person occupancy : {this.props.children[0].openSpots} vacancy
            </h1>
          </div>
          {roomsWithAvailable[0].map((room, idx) =>
            <div style={{
              margin: "10px",
              width: `${dims[0]}px`,
              height: `${dims[1]}px`,
              float: "left",
              backgroundColor: "white"
            }} key={`img-${idx}`}>

            </div>
          )}



        </div>
      </div>
    )
  }
}
export default RoomCard;
