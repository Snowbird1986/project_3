import React , { Component } from "react";
import moment from 'moment';
import "./TableRowBill.css";

class TableRowBill extends Component {
  state={
    dueDate:""
  }
// const TableRowBill = props => {
  componentDidMount(){
    this.setState({
      dueDate:moment(this.props.dueDate).format("dddd, MMMM Do YYYY")
    })
  // var dueDate=moment(props.dueDate).format("dddd, MMMM Do YYYY")
  }
  // console.log(dueDate)
  render(){
    return (
      <tbody>
        {!this.props.paid&&
          <tr>
              <th scope="row"></th>
                <td>{this.props.category}</td>
                <td>{this.props.assignee}</td>
                <td>${this.props.amount}</td>
                <td>{this.state.dueDate}</td>
                <td>{this.props.description}</td>
                <td><button className="fin" value={this.props.id} onClick={this.props.payBill}>X</button></td>
          </tr>
        }
      </tbody>
    );
  };
};
export default TableRowBill;