import React , { Component } from "react";
import moment from 'moment';
import "./TableRowTodo.css";

class TableRowTodo extends Component {
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
        {!this.props.completed&&
          <tr>
              <th scope="row"></th>
                <td>{this.props.title}</td>
                <td>{this.props.assignee}</td>
                <td>${this.props.amount}</td>
                <td>{this.state.dueDate}</td>
                <td>{this.props.description}</td>
                <td><button value={this.props.id} onClick={this.props.completeTask}>X</button></td>
          </tr>
        }
      </tbody>
    );
  };
};
export default TableRowTodo;