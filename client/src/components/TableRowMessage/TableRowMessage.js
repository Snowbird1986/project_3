import React , { Component } from "react";
import moment from 'moment';
import "./TableRowMessage.css";

class TableRowMessage extends Component {
  state={
    datePosted:""
  }
// const TableRowMessage = props => {
  componentDidMount(){
    this.setState({
      datePosted:moment(this.props.datePosted).format("dddd, MMMM Do YYYY")
    })
  // var dueDate=moment(props.dueDate).format("dddd, MMMM Do YYYY")
  }
  // console.log(dueDate)
  render(){
    return (
      <tbody>
        {!this.props.read&&
          <tr>
              <th scope="row"></th>
                <td>{this.props.subject}</td>
                <td>{this.props.from}</td>
                <td>{this.props.to}</td>
                <td>{this.state.datePosted}</td>
                <td>{this.props.message}</td>
                <td><button className="fin" value={this.props.id} onClick={this.props.trashMessage}>X</button></td>
          </tr>
        }
      </tbody>
    );
  };
};
export default TableRowMessage;