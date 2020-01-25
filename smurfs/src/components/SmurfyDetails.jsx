import React from "react";
import { MetaSmurf } from "./Styles";
import { initialState } from "../reducers/smurfReducer";
const SmurfyDetails = props => {
  return (
    <MetaSmurf>
      <h3>{props.name}</h3>
      {props.name !== initialState.village[0].name ? (
        <h4>
          age: {props.age} height: {props.height}
        </h4>
      ) : (
        <h4>
          {props.age} {props.height}
        </h4>
      )}
    </MetaSmurf>
  );
};

export default SmurfyDetails;
