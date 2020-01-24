import React, { useState } from "react";
import Smurfs from "./components/Smurfs";
import { SmurfyVillage } from "./components/Styles";
import { SmurfyButton } from "./components/Styles";
import { connect } from "react-redux";
import { dispatchGetSmurfs } from "./actions";

import NewSmurf from "./components/NewSmurf";
import "./App.css";

const mapStateToProps = state => {
  return { ...state };
};
const App = props => {
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
    <SmurfyVillage bc="green">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <SmurfyButton onClick={handleClick}>Smurf Around</SmurfyButton>
      <SmurfyButton onClick={handleNewSmurf}>*new</SmurfyButton>
      {showForm === 1 && <NewSmurf />}
      <hr />
      <Smurfs />
    </SmurfyVillage>
  );
};

export default connect(mapStateToProps, { dispatchGetSmurfs })(App);
