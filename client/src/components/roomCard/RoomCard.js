import React, { Component } from "react";
import "./RoomCard.css";

class RoomCard extends Component {
  componentDidMount = () => {
  }

  state = {
    userArray: this.props.children

  };
  picSize = (userArray) => {
    const boxWidth = 1500 / userArray.length;
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
  joinRoom = () => {
    //return console.log("you have joined")
  }


  render() {


    const spots = this.props.children[0].openSpots;

    const ourArray = this.makeLoop(spots);


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
          {ourArray.map((room, idx) => {
            return (
              < div style={{
                margin: "10px",
                width: `${dims[0]}px`,
                height: `${dims[1]}px`,
                float: "left",
                backgroundColor: "white"
              }} key={`img-${idx}`}>
                <h1

                  style={!!room ? { color: 'lightseagreen', textAlign: "center", fontSize: "28px" } : { color: 'black', textAlign: "center", fontSize: "12px" }}
                >
                  {
                    !!room ? room.firstName : 'Vacancy'

                  }

                </h1>
                <h1>
                  {
                    !!room ? room.budget : ''

                  }
                </h1>
                <h1>
                  {
                    !!room ? room.state : ''

                  }
                </h1>
                <h1>
                  {
                    !!room ? room.moveInDate : ''

                  }
                </h1>
                <h1>
                  {
                    !!room ? room.gender : ''

                  }
                </h1>
                <button value={this.props.roomID} onClick={this.props.applyRoom} style={{
                  marginBottom: "200px",
                  position: "fixed"
                }}>join room</button>
              </div>
            )
          })}



        </div>
      </div >
    )
  }
}
export default RoomCard;
