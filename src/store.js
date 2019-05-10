import {createStore} from "redux";
import freezerReducer from "./ducks/freezer";


export default createStore(freezerReducer);