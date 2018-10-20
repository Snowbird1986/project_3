import React , { Component } from "react";
import moment from 'moment';
import API from "../../utils/API";
// import moment from 'moment';
// import { Link } from "react-router-dom";
// import {withRouter} from "react-router-dom";
// import {browserHistory,withRouter} from "react-router-dom"
import "./TableRowUserPortal.css";

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
    // console.log(this.props)
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
// viewUser =()=>{
//   this.props.history.push(`/userHome`)
// }
// const TableRow = props => {
render(){
  return (
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
          <td><button id="approve" value={this.props.user} onClick={this.props.approveUser}>X</button></td>
          <td><button id="fin" value={this.props.user} onClick={this.props.rejectUser}>X</button></td>
      </tr>
    </tbody>
    );
  };
}
export default TableRowUserPortal;