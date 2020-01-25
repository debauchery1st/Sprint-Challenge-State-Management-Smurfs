import React from "react";
import { MetaSmurf } from "./Styles";
const SmurfyDetails = props => {
  return (
    <MetaSmurf>
      <h3>{props.name}</h3>
      <h4>
        {props.age} {props.height}
      </h4>
    </MetaSmurf>
  );
};

export default SmurfyDetails;
