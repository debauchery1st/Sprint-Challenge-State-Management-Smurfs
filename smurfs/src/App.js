import React from "react";
import Smurfs from "./components/Smurfs";
import { SmurfyVillage } from "./components/Styles";

import "./App.css";
function App() {
  // const bkg = `https://vignette.wikia.nocookie.net/smerfy/images/5/5a/Wioska-smerf%C3%B3w-smurf-village.jpg/revision/latest/scale-to-width-down/${Number(
  //   window.screen.availWidth
  // )}?cb=20150215152154&path-prefix=pl`;

  return (
    <SmurfyVillage>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <Smurfs />
    </SmurfyVillage>
  );
}

export default App;
