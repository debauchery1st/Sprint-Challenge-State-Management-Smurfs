import axios from "axios";
import { smurfVillage } from "../configs/smurfVillage";
const NOT_SO_SMURFY = "NOT_SO_SMURFY";
const ADD_SMURF = "ADD_SMURF";
const GET_SMURFY = "GET_SMURFY";

export const addSmurf = smurf => {
  return {
    type: ADD_SMURF,
    payload: smurf
  };
};

export const dispatchAddSmurf = smurf => dispatch => {
  return axios
    .post(smurfVillage, smurf)
    .then(smurfy => {
      dispatch({ type: ADD_SMURF, payload: smurfy.data });
      axios.get(smurfVillage).then(smurfs => {
        dispatch({ type: GET_SMURFY, payload: smurfs.data });
      });
    })
    .catch(unsmurfy => dispatch({ type: NOT_SO_SMURFY, payload: unsmurfy }));
};
