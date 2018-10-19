import React, { Component } from "react";
import "./RoomCard.css";
import API from "../../utils/API";

class RoomCard extends Component {
  componentDidMount = () => {
  }

  state = {
    userArray: this.props.children

  };
  picSize = (userArray) => {
    const boxWidth = 1000 / userArray.length;
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
    console.log(this.props.children[0]._id);
    // console.log(this.)
    // API.updateRooms({
    //   pending: true

    // })


    //   .then(res => {
    //     console.log(res)
    //     this.setState({
    //       pending: res.pending
    //     });
    //   })
    //   .catch(err => console.log(err));

  }




  render() {


    const spots = this.props.children[0].openSpots;

    const ourArray = this.makeLoop(spots);
    console.log(ourArray)


    const dims = this.picSize(ourArray);
    return (
      <div style={{
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
              < div className="smallCard" style={{
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

                <h1
                  style={{ color: 'Black', textAlign: "left", fontSize: "18px", marginLeft: "20px" }}
                >
                  {
                    !!room ? "Budget: " + room.budget : ''

                  }
                </h1>
                <h1
                  style={{ color: 'Black', textAlign: "left", fontSize: "18px", marginLeft: "20px" }}
                >
                  {
                    !!room ? "City: " + room.city : ''

                  }
                </h1>
                <h1
                  style={{ color: 'Black', textAlign: "left", fontSize: "18px", marginLeft: "20px" }}
                >
                  {
                    !!room ? "State: " + room.state : ''

                  }
                </h1>
                <h1
                  style={{ color: 'Black', textAlign: "left", fontSize: "18px", marginLeft: "20px" }}
                >
                  {
                    !!room ? "Move in date: " + room.moveInDate.slice(0, 10) : ''

                  }
                </h1>
                <h1
                  style={{ color: 'Black', textAlign: "left", fontSize: "18px", marginLeft: "20px" }}
                >
                  {
                    !!room ? "Gender: " + room.gender : ''

                  }
                </h1>

              </div>
            )
          })}

          <button className="joinRoom" value={this.props.children[0]._id} onClick={this.joinRoom}
          >join room</button>

        </div>
      </div >
    )
  }
}
export default RoomCard;
