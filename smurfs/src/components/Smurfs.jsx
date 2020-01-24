import React from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";

const mapStateToProps = state => {
  return { ...state };
};

const Smurfs = props => {
  return (
    <>
      {props.village &&
        props.village.map(smurfy => <Smurf key={smurfy.id} {...smurfy} />)}
    </>
  );
};

export default connect(mapStateToProps, {})(Smurfs);
