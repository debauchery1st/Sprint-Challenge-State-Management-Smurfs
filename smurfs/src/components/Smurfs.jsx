import React from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import { dispatchGetSmurfs } from "../actions";
import { Smurfin, SmurfyButton } from "./Styles";

const mapStateToProps = state => {
  return { ...state };
};

const Smurfs = props => {
  const handleClick = e => {
    e.preventDefault();
    props.dispatchGetSmurfs();
  };
  return (
    <Smurfin>
      <SmurfyButton onClick={handleClick}>Smurf Around</SmurfyButton>
      <hr />
      {props.village &&
        props.village.map(smurfy => <Smurf key={smurfy.id} {...smurfy} />)}
    </Smurfin>
  );
};

export default connect(mapStateToProps, { dispatchGetSmurfs })(Smurfs);
