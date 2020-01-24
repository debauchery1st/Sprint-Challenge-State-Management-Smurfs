const initialState = {
  village: [
    {
      name: "",
      age: 0,
      height: "",
      id: 0,
      image: ""
    }
  ]
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SMURFY":
      debugger;
      return { ...state, village: action.payload };
    case "ADD_SMURF":
      return { ...state, village: [...state.village, action.payload] };
    default:
      return { ...state };
  }
};
