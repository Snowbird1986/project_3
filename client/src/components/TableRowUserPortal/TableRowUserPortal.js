import React , { Component } from "react";
import moment from 'moment';
import API from "../../utils/API";
// import moment from 'moment';
// import { Link } from "react-router-dom";
// import {withRouter} from "react-router-dom";
// import {browserHistory,withRouter} from "react-router-dom"
import "./TableRowUserPortal.css";
import Table from "../../components/Table";

class TableRowUserPortal extends Component {
  state={
    firstName:"",
    lastName:"",
    email:"",
    introduction:"",
    phoneNumber:"",
    age:"",
    birthday:"",
    gender:"",
    budget:"",
    city:"",
    state:"",
    zip:"",
    id:"",
    imgUrl:"",
    age:"",
    availableDate:""
}

  componentDidMount=()=>{
    // console.log(this.state)
    console.log(this.props)
    API.getUser(this.props.user).then(res=>{
      // console.log(moment(res.data.birthday.slice(0,10),"MM/DD/YYYY"))
      this.setState({
        firstName:res.data.firstName,
        lastName:res.data.lastName,
        email:res.data.email,
        phoneNumber:res.data.phoneNumber,
        introduction:res.data.introduction,
        birthday:res.data.birthday.slice(0,10),
        age:moment().diff(res.data.birthday,'years',false),
        gender:res.data.gender,
        imgUrl:res.data.imgUrl,
        city:res.data.city,
        state:res.data.state,
        zip:res.data.zip,
        budget:res.data.budget,
        availableDate:moment(this.props.availableDate).format("dddd, MMMM Do YYYY")
      })
    })
  }
  componentDidUpdate =()=>{
    console.log(this.state)
    console.log(this.props)
    // let mBirthday = moment(this.state.birthday)
    // let age = mBirthday.diff(moment(this.props.dateApplied, 'years'))
    // // API.getUser(this.props.user).then(res=>{
    // //   console.log(res)
    //   this.setState({
    //     age:age,
    //     // lastName:res.data.lastName
    //   })
    // })

  }
  approveUser =(e)=>{
    console.log(e.target.value)
    console.log(this.props)
    let updatedSlots=this.props.openSpots-1
    API.updateContracts(e.target.value,{
        approved:true,
        pending:false,
        dateApproved: Date.now()
    }).then(
      // updatedslots=this.props.openspots-1,
      API.updateRooms(this.props.room,{
      "$push":{ user: this.props.user},
      "$pull":{ pendinguser: this.props.user},
      openSpots: updatedSlots,
    })).then(this.props.history.push(`/refresh/userPortal`))
}
rejectUser =(e)=>{
    console.log(e.target.value)
    console.log(this.props)
    // const props=this.props
    API.updateContracts(e.target.value,{
        pending:false,
    }).then(API.updateRooms(this.props.room,{"$pull":{ pendinguser: this.props.user}})).then(this.props.history.push(`/refresh/userPortal`))
}
// viewUser =()=>{
//   this.props.history.push(`/userHome`)
// }
// const TableRow = props => {
render(){
  return (
    <div>
      
      {this.props.pending&&
        <div className="col-md-10 offset-md-1" id="scroll">
        <h2>Potential Roomie</h2>
          <Table>
              <thead>
              <tr>
                  <th scope="col"></th>
                  <th scope="col" width="15%">Name</th>
                  <th scope="col" width="15%">Phone</th>
                  <th scope="col" width="10%">Email</th>
                  <th scope="col" width="10%">Proposed Rent/Mo.</th>
                  <th scope="col" width="10%">Length</th>
                  <th scope="col" width="5%">Age</th>
                  <th scope="col" width="5%">Gender</th>
                  <th scope="col" width="20%">Move In Date</th>
                  {/* <th scope="col" width="10%">City</th>
                  <th scope="col" width="5%">State</th>
                  <th scope="col" width="5%">Zip</th> */}
                  <th scope="col" width="5%">App</th>
                  <th scope="col" width="5%">Rej</th>
              </tr>
            </thead>
              <tbody>
                <tr>
                  <th scope="row" value={this.props.user} onClick={this.props.viewUser}><img src={this.state.imgUrl} /></th>
                    <td>{this.state.firstName} {this.state.lastName}</td>
                    <td><a href={`tel:${this.state.phoneNumber}`}>{this.state.phoneNumber}</a></td>
                    <td><a href={`mailto:${this.state.email}`}>{this.state.email}</a></td>
                    <td>${this.props.rent}</td>
                    <td>{this.props.length}</td>
                    <td>{this.state.age} Yrs. Old</td>
                    <td>{this.state.gender}</td>
                    <td>{this.state.availableDate}</td>
                    <td><button id="approve" value={this.props._id} onClick={this.approveUser}>X</button></td>
                    <td><button id="fin" value={this.props._id} onClick={this.rejectUser}>X</button></td>
                </tr>
                <tr>
                  <td colSpan="5">User Intro:</td>
                  <td colSpan="6">Application Comments:</td>
                </tr>
                <tr>
                  <td colSpan="5">{this.state.introduction}</td>
                  <td colSpan="6">{this.props.description}</td>
                </tr>
              </tbody>
          </Table>
        </div>
      }
    </div>
    );
  };
}
export default TableRowUserPortal;