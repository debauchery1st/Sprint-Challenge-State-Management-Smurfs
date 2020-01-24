import React from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import { dispatchGetSmurfs } from "../actions";
const mapStateToProps = state => {
  console.log("STATE: ", state);
  return { ...state };
};

const Smurfs = props => {
  console.log("SMURFS", props);
  const handleClick = e => {
    e.preventDefault();
    console.log(props);
    props.dispatchGetSmurfs();
  };
  return (
    <>
      <button onClick={handleClick}>reSmurf</button>
      {props.village &&
        props.village.map(smurfy => <Smurf key={smurfy.id} {...smurfy} />)}
    </>
  );
};

export default connect(mapStateToProps, { dispatchGetSmurfs })(Smurfs);
