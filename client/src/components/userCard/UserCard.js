import React, {Component} from "react";
import { Col, Row, Container } from "../../components/Grid";
import moment from 'moment';
import "./UserCard.css";

class UserCard extends Component {

  state={
    moveInDate:""
  }

  componentDidMount(){
    this.setState({
      moveInDate:moment(this.props.moveInDate).format("dddd, MMMM Do YYYY")
    })
  }

  sendMail() {
    var link = "mailto:me@example.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(document.getElementById('contact'));

    window.location.href = link;
}

  render() {
    return (
      <tbody>
        
          {!this.props.read&&
          <tr>
            <th scope="row"></th>
            <td> {this.props.firstName} </td>
            <td> {this.props.lastName} </td>
            <td> {this.props.moveInDate} </td>
            <td> {this.props.budget} </td>
            
            <td><button className="contact" value={this.props.email} onClick={this.sendMail}>Send Message</button></td>
          
          </tr>
          }
        
      </tbody>
    )
  }
}

export default UserCard;
