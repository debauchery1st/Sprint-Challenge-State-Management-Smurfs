export const initialState = {
  village: [
    {
      name: "Welcome to Smurf Village,",
      age: "feel free to smurf around",
      height: "",
      id: 0,
      image:
        "https://vignette.wikia.nocookie.net/smurfs/images/b/bd/Papa_Smurf123.png/revision/latest/scale-to-width-down/200?cb=20130805130238"
    }
  ]
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SMURFY":
      return { ...state, village: action.payload };
    case "ADD_SMURF":
      return { ...state, village: [...state.village, action.payload] };
    case "UPDATE_SMURF":
      console.log("SMURF REDUCER!");
      return {
        ...state,
        village: [
          ...state.village.filter(smrf => smrf.id !== action.payload.id),
          action.payload
        ]
      };
    default:
      return { ...state };
  }
};
