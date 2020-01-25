import axios from "axios";
import { smurfVillage } from "../configs/smurfVillage";
const NOT_SO_SMURFY = "NOT_SO_SMURFY";
const UPDATE_SMURF = "UPDATE_SMURF";
const GET_SMURFY = "GET_SMURFY";

export const updateSmurf = smurf => {
  return {
    type: UPDATE_SMURF,
    payload: smurf
  };
};

export const dispatchUpdateSmurf = smurf => dispatch => {
  debugger;
  const updateURL = `${smurfVillage}/${smurf.id}`;
  return axios
    .put(updateURL, smurf)
    .then(smurfy => {
      dispatch({ type: UPDATE_SMURF, payload: smurfy.data });
      axios.get(smurfVillage).then(smurfs => {
        dispatch({ type: GET_SMURFY, payload: smurfs.data });
      });
    })
    .catch(unsmurfy => dispatch({ type: NOT_SO_SMURFY, payload: unsmurfy }));
};
