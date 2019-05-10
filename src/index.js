import store from "./store";
import * as flavors from "./constants/icecreams_flavors";
import  {actions } from "./ducks/freezer";
import React from "react";
import ReactDOM from 'react-dom';
import App from "./components/App/App";

ReactDOM.render(<App />, document.getElementById('root'));

//console.log(store.log);

//store.subscribe( () => console.log(store.getState()));
//store.dispatch(actions.updateTemperature(-9));
//store.dispatch(actions.addIcecream(flavors.FABADA, 33));
