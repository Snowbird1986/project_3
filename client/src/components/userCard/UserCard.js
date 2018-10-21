import React, {Component} from "react";
import { Col, Row, Container } from "../../components/Grid";
import Table from "../../components/Table";
import TableRow from "../../components/TableRow";
import { FormBtn, Input, TextArea } from "../../components/Form";
import moment from 'moment';
import "./UserCard.css";

class UserCard extends Component {

  state={
    moveInDate:""
  }

  componentDidMount(){
    this.setState({
      moveInDate: moment(this.props.moveInDate).format("dddd, MMMM Do YYYY")
    })
  }

  sendMail = () => {
    var link = ("mailto:" + (this.props.email) + "?" 
             + "&subject=" + escape("Let's be roommates!")
             + "&body=" + escape("Hey " + this.props.firstName + "!\n" + "I think we might be a great match as roommates. Let's get in touch!\n"));

             

    window.location.href = link;
}

  render() {
    return (
      <div className="col-md-8 offset-md-2" id="searchresults">
              
            <Table>
                <thead>
                    <tr> 
                        <th scope="col" width="10%"></th>                                   
                        <th scope="col" width="20%">Name</th>                      
                        <th scope="col" width="30%">Move In Date</th>
                        <th scope="col" width="20%">Budget</th>
                        <th scope="col" width="20%">Contact</th>
                        
                    </tr>
                </thead>
                <tbody>       
                    {!this.props.read&&
                    <tr>
                      <td> <img src={this.props.imgUrl} /> </td>
                      <td> {this.props.firstName} {this.props.lastName} </td>                     
                      <td> {this.state.moveInDate} </td>
                      <td> ${this.props.budget} </td>
                      <td> <FormBtn className="contact" value={this.props.email} onClick={this.sendMail}>Message</FormBtn> </td>
                    
                    </tr>
                    }
                  
                </tbody>
            </Table>
            
          
      </div>
    )
  }
}

export default UserCard;
