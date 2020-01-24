import axios from "axios";
import { smurfVillage } from "../configs/smurfVillage";

const GET_SMURFY = "GET_SMURFY";
const NOT_SO_SMURFY = "NOT_SO_SMURFY";

export const getSmurfs = smurfs => {
  return {
    type: GET_SMURFY,
    payload: smurfs
  };
};

export const dispatchGetSmurfs = () => dispatch => {
  return axios
    .get(smurfVillage)
    .then(smurfs => {
      dispatch({ type: GET_SMURFY, payload: smurfs.data });
    })
    .catch(unsmurfy => dispatch({ type: NOT_SO_SMURFY, payload: unsmurfy }));
};
