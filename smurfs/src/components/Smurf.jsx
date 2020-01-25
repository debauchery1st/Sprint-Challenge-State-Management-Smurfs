import React from "react";
import SmurfyDetails from "./SmurfyDetails";
import { SmurfBoard, SmurfyImage } from "./Styles";

const Smurf = props => {
  return (
    <SmurfBoard>
      <SmurfyImage
        src={props.image}
        alt={props.name}
        title={`${props.name} ${props.age} ${props.height}`}
      />
      <SmurfyDetails name={props.name} age={props.age} height={props.height} />
    </SmurfBoard>
  );
};

export default Smurf;
