import React , { Component } from "react";
import moment from 'moment';
// import { Link } from "react-router-dom";
// import {withRouter} from "react-router-dom";
// import {browserHistory,withRouter} from "react-router-dom"
import "./TableRowUserPortal.css";

class TableRowUserPortal extends Component {


// viewUser =()=>{
//   this.props.history.push(`/userHome`)
// }
// const TableRow = props => {
render(){
  return (
    <tr>
      <th scope="row" value={this.props.id} onClick={this.props.viewUser}><img src={this.props.imgUrl} /></th>
        <td>{this.props.firstName} {this.props.lastName}</td>
        <td><a href={`tel:${this.props.phoneNumber}`}>{this.props.phoneNumber}</a></td>
        <td><a href={`mailto:${this.props.email}`}>{this.props.email}</a></td>
        <td>{this.props.budget}</td>
        <td>{this.props.birthday}</td>
        <td>{this.props.Gender}</td>
        <td>{this.props.moveInDate}</td>
        <td><button id="approve" value={this.props.id} onClick={this.props.approveUser}>X</button></td>
        <td><button id="fin" value={this.props.id} onClick={this.props.rejectUser}>X</button></td>
    </tr>
    );
  };
}
export default TableRowUserPortal;