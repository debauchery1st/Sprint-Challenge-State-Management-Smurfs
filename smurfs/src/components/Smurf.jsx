import React, { useState } from "react";
import SmurfyDetails from "./SmurfyDetails";
import { SmurfBoard, SmurfyImage } from "./Styles";

const Smurf = props => {
  const [editSmurf, setEditSmurf] = useState(false);
  const openEditor = () => editSmurf === false && setEditSmurf(true);
  const closeEditor = () => editSmurf === true && setEditSmurf(false);
  return (
    <SmurfBoard onClick={openEditor}>
      <SmurfyImage
        src={props.image && props.image.length > 0 ? props.image : "/smurf.gif"}
        alt={props.name}
        title={`${props.name} ${props.age} ${props.height}`}
      />
      <SmurfyDetails
        smurfyID={props.smurfyID}
        editSmurf={editSmurf}
        closeEditor={closeEditor}
        name={props.name}
        age={props.age}
        height={props.height}
        selfie={props.image}
      />
    </SmurfBoard>
  );
};

export default Smurf;
