import React , { Component } from "react";
// import { Link } from "react-router-dom";
import {withRouter} from "react-router-dom";
// import {browserHistory,withRouter} from "react-router-dom"
import "./TableRow.css";

class TableRow extends Component {


viewUser =()=>{
  this.props.history.push(`/userHome`)
}
// const TableRow = props => {
render(){
  return (
    <tr>
      <th scope="row" value={this.props.id} onClick={this.viewUser}><img src={this.props.imgUrl} /></th>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td><a href={`tel:${this.props.phoneNumber}`}>{this.props.phoneNumber}</a></td>
        <td><a href={`mailto:${this.props.email}`}>{this.props.email}</a></td>
    </tr>
    );
  };
}
export default TableRow;