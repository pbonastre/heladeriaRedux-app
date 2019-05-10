import store from "./store";
import * as flavors from "./constants/icecreams_flavors";
import  {actions as actionsFreezer} from "./ducks/freezer";
import React from "react";
import ReactDOM from 'react-dom';
import App from "./components/App/App";

setInterval  ( () => store.dispatch(actionsFreezer.addIcecream(flavors.FABADA, 5)), 1500)
ReactDOM.render(<App />, document.getElementById('root'));

//console.log(store.log);

//store.subscribe( () => console.log(store.getState()));
//store.dispatch(actions.updateTemperature(-9));
//store.dispatch(actions.addIcecream(flavors.FABADA, 33));
