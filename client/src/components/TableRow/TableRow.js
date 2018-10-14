import React from "react";
import "./TableRow.css";

const TableRow = props => {
  return (
    <tr>
      <th scope="row"><img src={props.imgUrl} /></th>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td><a href={`tel:${props.phoneNumber}`}>{props.phoneNumber}</a></td>
        <td><a href={`mailto:${props.email}`}>{props.email}</a></td>
    </tr>
  );
};
export default TableRow;