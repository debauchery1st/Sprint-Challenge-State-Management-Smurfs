import React from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import { dispatchGetSmurfs } from "../actions";
import { Smurfin } from "./Styles";

const mapStateToProps = state => {
  return { ...state };
};

const Smurfs = props => {
  return (
    <Smurfin>
      {props.village &&
        props.village.map((smurfy, idx) => (
          <Smurf key={idx} smurfyID={smurfy.id} {...smurfy} />
        ))}
    </Smurfin>
  );
};

export default connect(mapStateToProps, { dispatchGetSmurfs })(Smurfs);
