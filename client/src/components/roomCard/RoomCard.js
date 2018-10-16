import React, { Component } from "react";
import "./RoomCard.css";

class RoomCard extends Component {
  componentDidMount = () => {
  }

  state = {
    userArray: this.props.children

  };
  picSize = (userArray) => {
    const boxWidth = 500 / userArray.length;
    const boxHeight = boxWidth;
    return [boxWidth, boxHeight];

  };
  makeLoop = (spots) => {
    let roomsWithAvailable = [];
    roomsWithAvailable.push(Array.apply(null, Array(Number(spots))));
    // roomsWithAvailable.push(this.props.children[0].user);
    // console.log(this.props.children[0].user);
    let thisWork = roomsWithAvailable[0].concat(this.props.children[0].user);

    return thisWork
  }
  // makeLoop()

  render() {

    console.log(this.props.children[0].user)
    console.log(this.props.children[0].openSpots)
    const spots = this.props.children[0].openSpots;
    //const myRooms = this.props.children[0].rooms;



    //console.log(this.makeLoop(spots));
    const ourArray = this.makeLoop(spots);
    console.log(ourArray)
    console.log(ourArray[0] === undefined)
    console.log(ourArray[3].firstName)

    const dims = this.picSize(ourArray);
    return (
      <div onClick={() => console.log("")} style={{
        backgroundColor: "lightseagreen",
        width: "100%",
        height: "100%"

      }} className="card">
        {/* {this.state.rooms.map((room, idx) =>
          <RoomCard key={`img-${idx}`}>{this.state.rooms[idx]} </RoomCard>
        )} */}
        <div
          className="room-container">
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
          {ourArray.map((room, idx) =>

            <div style={{
              margin: "10px",
              width: `${dims[0]}px`,
              height: `${dims[1]}px`,
              float: "left",
              backgroundColor: "white"
            }} key={`img-${idx}`}>
              <h1

                style={ourArray[idx] !== undefined ? { color: 'lightseagreen', textAlign: "center", fontSize: "28px" } : { color: 'black', textAlign: "center", fontSize: "12px" }}
              >
                {
                  ourArray[idx] !== undefined ? ourArray[idx].firstName : 'Vacancy'

                }

              </h1>
            </div>
          )}



        </div>
      </div>
    )
  }
}
export default RoomCard;
