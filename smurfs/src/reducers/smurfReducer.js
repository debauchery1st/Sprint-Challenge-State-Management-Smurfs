const initialState = {
  village: [
    {
      name: "Brainey",
      age: 200,
      height: "5cm",
      id: 0,
      image:
        "https://vignette.wikia.nocookie.net/smurfs/images/e/e8/Brainy.jpg/revision/latest?cb=20090609234412"
    }
  ]
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SMURF":
      return { ...state, village: [...state.village, action.payload] };
    default:
      return { ...state };
  }
};
