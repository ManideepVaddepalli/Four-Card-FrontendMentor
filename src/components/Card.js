import React from "react";

export default function Card(props) {
  return (
    <div
      className="card-container"
      style={{ borderTop: `5px solid ${props.bordercolcor}` }}
    >
      <h3>{props.heading}</h3>
      <p>{props.para}</p>
      <>{props.svg}</>
    </div>
  );
}
