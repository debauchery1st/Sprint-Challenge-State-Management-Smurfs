import React from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";

const mapStateToProps = state => {
  return { ...state };
};

const Smurfs = props => {
  console.log(props);
  return (
    <>{props.village && props.village.map(smurfy => <Smurf {...smurfy} />)}</>
  );
};

export default connect(mapStateToProps, {})(Smurfs);
