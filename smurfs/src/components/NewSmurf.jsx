import React, { useState } from "react";
import { connect } from "react-redux";
import { dispatchAddSmurf } from "../actions";

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
    const { name, height, age } = smurf;
    name.length > 0 &&
      height.length > 0 &&
      age.length &&
      0 &&
      props.dispatchAddSmurf(smurf) &&
      setSmurf({ ...initSmurfy });
  };
  const handleFormChange = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleAddSmurf}>
      <input
        name="name"
        placeholder="name"
        value={smurf.name}
        onChange={handleFormChange}
      />
      <input
        name="age"
        placeholder="age"
        value={smurf.age}
        onChange={handleFormChange}
      />
      <input
        name="height"
        placeholder="height"
        value={smurf.height}
        onChange={handleFormChange}
      />
      <input
        name="image"
        placeholder="image URL"
        value={smurf.image}
        onChange={handleFormChange}
      />
      <button>add</button>
    </form>
  );
};

export default connect(mapStateToProps, {
  dispatchAddSmurf
})(NewSmurf);
