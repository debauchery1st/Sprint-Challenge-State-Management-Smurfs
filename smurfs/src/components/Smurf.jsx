import React from "react";
import { SmurfBoard, SmurfyImage } from "./Styles";

const Smurf = props => {
  return (
    <SmurfBoard>
      <SmurfyImage src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <h3>
        {props.age} {props.height}
      </h3>
    </SmurfBoard>
  );
};

export default Smurf;
