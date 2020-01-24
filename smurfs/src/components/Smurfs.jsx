import React, { useState } from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import NewSmurf from "./NewSmurf";
import { dispatchGetSmurfs } from "../actions";
import { Smurfin, SmurfyButton } from "./Styles";

const mapStateToProps = state => {
  return { ...state };
};

const Smurfs = props => {
  const [showForm, setShowForm] = useState(0);
  const handleClick = e => {
    e.preventDefault();
    props.dispatchGetSmurfs();
  };
  const handleNewSmurf = e => {
    e.preventDefault();
    setShowForm(1);
  };
  return (
    <Smurfin>
      <SmurfyButton onClick={handleClick}>Smurf Around</SmurfyButton>
      <SmurfyButton onClick={handleNewSmurf}>*new</SmurfyButton>
      {showForm === 1 && <NewSmurf />}
      <hr />
      {props.village &&
        props.village.map(smurfy => <Smurf key={smurfy.id} {...smurfy} />)}
    </Smurfin>
  );
};

export default connect(mapStateToProps, { dispatchGetSmurfs })(Smurfs);
