import React, { Component } from "react";
import "./RoomCard.css";
import API from "../../utils/API";
import moment from 'moment';


class RoomCard extends Component {
  
  componentDidMount = () => {
    this.setState({
      availableDate: moment(this.props.availableDate).format("MMMM Do YYYY"),
      occupancy: this.props.children[0].openSpots+this.props.children[0].user.length
    })
  }


  state = {
    userArray: this.props.children,
    hover: "",
    availableDate: "",
    occupancy:""
  };


  picSize = (userArray) => {
    const boxWidth = 700 / userArray.length+1;
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
    // console.log(ourArray[3].imgUrl)


    const dims = this.picSize(ourArray);
    return (
      <div style={{
        backgroundColor: "lightseagreen",
        width: "100%",
        height: "100%",
        // justifyContent:"Center"

      }} className="card row">
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
              {this.state.occupancy} person occupancy : {this.props.children[0].openSpots} vacancy
            </h1>
          </div>
          {ourArray.map((room, idx) => {
            return (

              < div className="smallCard" style={{
                margin: "10px",
                borderRadius: "10px",
                width: `${dims[0]}px`,
                height: `${dims[1]}px`,
                float: "left",
                // display:"inline",
                backgroundColor: "white"
              }} key={`img-${idx}`}>
                <div className="side">
                  {!!room > 0&&
                    <img style={{
                      borderRadius: "50%",
                      position: "fixed",
                      marginLeft: "93px",
                      marginTop: "64px",
                      zIndex: 4,
                      width: "45px",
                      height: "45px"

                    }} src={room.imgUrl} alt="Jimmy Eat World"></img>
                  }

                  {!!room > 0 && <div className="greenCircle" style={{
                    position: "fixed",
                    zIndex: 3,
                    marginTop: "57px",
                    marginLeft: "86px",
                    borderRadius: "50%",
                    backgroundColor: 'lightseagreen',
                    width: "60px",
                    height: "60px"
                  }}></div>
                  }
                  {!!room > 0 && <svg style={{ zIndex: 2, marginTop: "85px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.44 21.1"><title>card</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M89.63,4.8c-17,1.3-35.49,12.8-41.76,12.58-5.61-.2-5.91-4-1.53-6.44a35.27,35.27,0,0,1,3.74-1.08,9.52,9.52,0,0,1-3.7-7.53A9.42,9.42,0,0,1,46.68,0c-3.63,1.84-7.31,3.62-11.51,4C24.85,4.87,15.24-.18,3.65.27A13.31,13.31,0,0,0,0,1.07V7.38c11.86-4,24.76-1,36.64-.59C29.87,14.34,34,20.24,42.23,21a25.4,25.4,0,0,0,10.69-1.8c7.86-2.79,15.22-7.34,23.39-9a48,48,0,0,1,24.13,1.56V5.33C97,4.26,93.25,4.52,89.63,4.8Z" /></g></g></svg>

                  }

                </div>
                <h2
                  className="backCardText"
                  style={!!room ? { color: 'lightseagreen', textAlign: "center", fontSize: "28px", marginLeft: "20px" } : { color: 'black', textAlign: "center", fontSize: "12px" }}
                >
                  {
                    !!room ? room.firstName : 'Vacancy'

                  }

                </h2>



                <h2
                  className="backCardText"
                  style={{ color: 'Black', textAlign: "left", fontSize: "18px", marginLeft: "20px" }}
                >
                  {
                    !!room ? "City: " + room.city : ''

                  }

                </h2>
                <h2
                  className="backCardText"
                  style={{ color: 'Black', textAlign: "left", fontSize: "18px", marginLeft: "20px" }}
                >
                  {
                    !!room ? "State: " + room.state : ''

                  }

                </h2>
                <h2
                  className="backCardText"
                  style={{ color: 'Black', textAlign: "left", fontSize: "18px", marginLeft: "20px" }}
                >
                  {
                    !!room ? "Move in date: " + room.moveInDate.slice(0, 10) : ''

                  }
                </h2>
                <h2
                  className="backCardText"
                  style={{ color: 'Black', textAlign: "left", fontSize: "18px", marginLeft: "20px" }}
                >
                  {
                    !!room ? "Gender: " + room.gender : ''

                  }
                </h2>

              </div>
            )
          })}
          <div className="joinRoom" value={this.props.children[0]._id} onClick={this.props.applyRoom}
            style={{


              float: "left",
              width: `${dims[0]}px`,
              height: `${dims[1]}px`,
              //margin: "50px",
              borderRadius: "50%",
              backgroundImage: 'url("images/rectangle.svg")',
              backgroundRepeat: "no-repeat",
              backgroundColor: "white",
              backgroundPositionY: "-5px",
              marginTop: "20px"




            }}> <br></br><br></br>
            <strong style={{ color: "white", marginLeft: "60px" }}>PRESS TO JOIN</strong>
            <br></br>
            <div style={{ paddingTop: "20px", fontSize:"15px"}} className="joinButton">

              <strong>Type: </strong>{this.props.children[0].category}
            </div>
            <div style={{ paddingTop: "5px", fontSize:"15px" }} className="joinButton">
            <strong>Location: </strong>{this.props.children[0].city}, {this.props.children[0].state} {this.props.children[0].zip}
            </div>
            <div style={{ paddingTop: "5px", fontSize:"15px" }} className="joinButton">
              <strong>Requested Rent: </strong> ${this.props.children[0].rent}
            </div>
            <div style={{ paddingTop: "5px", fontSize:"15px" }} className="joinButton">
              <strong>Date Available: </strong><br></br> {this.state.availableDate}
            </div>

          </div>

        </div>
      </div >
    )
  }
}
export default RoomCard;
