import React, { useState } from "react";

import { MetaSmurf, SmurfyEdit, SmurfyUpdate } from "./Styles";
import { initialState } from "../reducers/smurfReducer";
import { connect } from "react-redux";
import { dispatchUpdateSmurf } from "../actions";

const initSmurfy = {
  name: "",
  age: "",
  height: "",
  image: ""
};
const mapStateToProps = state => {
  /* 
  To edit details, the <Smurf /> will need access to the dispatchUpdateSmurf action. 
  
  Access is only granted through the proper channels (props).

  This same rule should also apply to the state.
  */
  return { ...state };
};

const SmurfyDetails = props => {
  const [localState, setLocalState] = useState({
    ...initSmurfy,
    id: props.smurfyID,
    name: props.name,
    age: props.age,
    height: props.height,
    image: props.selfie
  });
  const handleChange = e => {
    setLocalState({ ...localState, [e.target.name]: e.target.value });
  };
  const handleUpdateSmurf = e => {
    e.preventDefault();
    props.dispatchUpdateSmurf(localState);
    props.closeEditor();
  };

  return (
    <MetaSmurf>
      {localState.name !== initialState.village[0].name ? (
        !props.editSmurf ? (
          <div>
            <h3>{localState.name}</h3>
            <h4>
              age: {localState.age} height: {localState.height}
            </h4>
          </div>
        ) : (
          <form onSubmit={handleUpdateSmurf}>
            <SmurfyEdit
              name="name"
              placeholder="name"
              value={localState.name}
              onChange={handleChange}
            />
            <SmurfyEdit
              name="age"
              placeholder="age"
              value={localState.age}
              onChange={handleChange}
            />
            <SmurfyEdit
              name="height"
              placeholder="height"
              value={localState.height}
              onChange={handleChange}
            />
            <SmurfyUpdate>update</SmurfyUpdate>
          </form>
        )
      ) : (
        <div>
          <h3>{props.name}</h3>
          <h4>
            {props.age} {props.height}
          </h4>
        </div>
      )}
    </MetaSmurf>
  );
};

export default connect(mapStateToProps, { dispatchUpdateSmurf })(SmurfyDetails);
