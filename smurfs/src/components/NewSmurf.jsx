import React from "react";
import { connect } from "react-redux";
import { dispatchAddSmurf } from "../actions/addSmurf";

const mapStateToProps = state => {
  return { ...state };
};

const NewSmurf = props => {
  const handleAddSmurf = e => {
    e.preventDefault();
    console.log(e.target.value);
    // props.dispatchAddSmurf
  };
  return (
    <form onSubmit={handleAddSmurf}>
      <input placeholder="name" />
      <input placeholder="age" />
      <input placeholder="height" />
      <input placeholder="image URL" />
    </form>
  );
};

export default connect(mapStateToProps, { dispatchAddSmurf })(NewSmurf);
