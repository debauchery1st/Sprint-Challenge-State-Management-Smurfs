import React, { useState } from "react";
import { connect } from "react-redux";
import { dispatchAddSmurf } from "../actions";
import { SmurfyForm, SmurfyInput, SmurfyButton } from "./Styles";
const mapStateToProps = state => {
  return { ...state };
};

const initSmurfy = {
  name: "",
  age: "",
  height: "",
  image: ""
};

const NewSmurf = props => {
  const [smurf, setSmurf] = useState({ ...initSmurfy });
  const handleAddSmurf = e => {
    e.preventDefault();
    props.dispatchAddSmurf(smurf) && setSmurf({ ...initSmurfy });
  };
  const handleFormChange = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };
  return (
    <SmurfyForm onSubmit={handleAddSmurf}>
      <SmurfyInput
        name="name"
        placeholder="name"
        value={smurf.name}
        onChange={handleFormChange}
      />
      <SmurfyInput
        name="age"
        placeholder="age"
        value={smurf.age}
        onChange={handleFormChange}
      />
      <SmurfyInput
        name="height"
        placeholder="height"
        value={smurf.height}
        onChange={handleFormChange}
      />
      <SmurfyInput
        name="image"
        placeholder="image URL"
        value={smurf.image}
        onChange={handleFormChange}
      />
      <SmurfyButton>add</SmurfyButton>
    </SmurfyForm>
  );
};

export default connect(mapStateToProps, {
  dispatchAddSmurf
})(NewSmurf);
