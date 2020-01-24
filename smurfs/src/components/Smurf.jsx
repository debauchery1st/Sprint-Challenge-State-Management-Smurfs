import React from "react";

const Smurf = props => {
  return (
    <span className="Smurf">
      <img src={props.image} />
      <h2>{props.name}</h2>
      <h3>
        {props.age} {props.height}
      </h3>
    </span>
  );
};

export default Smurf;
