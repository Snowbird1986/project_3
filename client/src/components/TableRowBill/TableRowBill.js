import React from "react";
import "./TableRowBill.css";

const TableRowBill = props => {
  return (
    // <tr>
    //   <th scope="row"><img src={props.imgUrl} /></th>
    //     <td>{props.firstName}</td>
    //     <td>{props.lastName}</td>
    //     <td><a href={`tel:${props.phoneNumber}`}>{props.phoneNumber}</a></td>
    //     <td><a href={`mailto:${props.email}`}>{props.email}</a></td>
    // </tr>
    <tbody>
      {!props.paid&&
        <tr>
            <th scope="row"></th>
              <td>{props.category}</td>
              <td>{props.assignee}</td>
              <td>${props.amount}</td>
              <td>{props.dueDate}</td>
              <td>{props.description}</td>
              <td><button value={props.id} onClick={this.payBill}>X</button></td>
        </tr>
      }
    </tbody>
  );
};
export default TableRowBill;