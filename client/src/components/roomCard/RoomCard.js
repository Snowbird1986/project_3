import React, { Component } from "react";
import "./RoomCard.css";
class RoomCard extends Component {
  componentDidMount = () => {
    //console.log(this.props)
  }

  state = {
    userArray: this.props.children
    // userArray: [
    //   //   {

    //   //   pic: this.props.children[0].img,
    //   //   birthday: this.props.children[0].birthday,
    //   //   email: this.props.children[0].email,
    //   //   first_Name: this.props.children[0].firstName,
    //   //   gender: this.props.children[0].gender,
    //   //   last_Name: this.props.children[0].lastName,
    //   //   location: this.props.children[0].location

    //   // }
    //   //, 
    //   "user2", "user3", "user4", "user5"]


  };
  picSize = (userArray) => {
    const boxWidth = 230 / userArray.length;
    const boxHeight = boxWidth;
    return [boxWidth, boxHeight];

  };

  render() {
    console.log(this.props.children)

    const dims = this.picSize(this.state.userArray);
    // const pic = this.props.children[0].img;
    // const birthday = this.props.children[0].birthday;
    // const email = this.props.children[0].email;
    // const first_Name = this.props.children[0].firstName;
    // const gender = this.props.children[0].gender;
    // const last_Name = this.props.children[0].lastName;
    // const location = this.props.children[0].location;
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
              4 person occupancy : 1 vacancy
            </h1>
          </div>
          {this.props.children.map((user, idx) => <div style={{
            margin: "10px",
            width: `${dims[0]}px`,
            height: `${dims[1]}px`,
            float: "left",
            backgroundColor: "white"
          }} key={`img-${idx}`} >
            <img src={user.img} /></div>
          )}
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
