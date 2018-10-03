import React from "react";

export const Row = ({ fluid, children }) => (
  <div className={`row${fluid ? "-fluid" : ""} col-md-12`}>
    {children}
  </div>
);
