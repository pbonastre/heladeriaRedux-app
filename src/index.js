import store from "./store";
import * as flavors from "./constants/icecreams_flavors";
import  {actions } from "./ducks/freezer";

console.log(store.log);

store.subscribe( () => console.log(store.getState()));
store.dispatch(actions.updateTemperature(-9));
store.dispatch(actions.addIcecream(flavors.FABADA, 33));