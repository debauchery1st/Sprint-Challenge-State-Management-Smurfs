import React from "react";
import { connect } from "react-redux";

import { MetaSmurf, SmurfSpan } from "./Styles";
import { initialState } from "../reducers/smurfReducer";
import { dispatchUpdateSmurf } from "../actions";

const mapStateToProps = state => {
  return { ...state };
};

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
      <SmurfSpan>edit</SmurfSpan>
    </MetaSmurf>
  );
};

export default connect(mapStateToProps, { dispatchUpdateSmurf })(SmurfyDetails);
