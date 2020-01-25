import React from "react";
import SmurfyDetails from "./SmurfyDetails";
import { SmurfBoard, SmurfyImage } from "./Styles";

const Smurf = props => {
  return (
    <SmurfBoard>
      <SmurfyImage
        src={props.image && props.image.length > 0 ? props.image : "/smurf.gif"}
        alt={props.name}
        title={`${props.name} ${props.age} ${props.height}`}
      />
      <SmurfyDetails name={props.name} age={props.age} height={props.height} />
    </SmurfBoard>
  );
};

export default Smurf;
