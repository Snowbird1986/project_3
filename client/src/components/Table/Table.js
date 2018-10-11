import React from "react";
import "./Table.css";

const Table = ({ children }) => {
  return (
    <table className="table table-sm" id="tablediv" size="col-sm-6">
        {children}
    </table>
  );
};
export default Table;