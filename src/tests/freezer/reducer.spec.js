import reducer, {actions, MAX_AMOUNT_PER_ICECREAM} from "../../ducks/freezer";
import * as flavors from "../../constants/icecreams_flavors";

describe('freezerReducer', () => {
    it('should store the temperature in the state', () => {
        const newState = reducer(undefined, actions.updateTemperature(-6));
        expect(newState.temperature).toEqual(-6);
    });

    it('should store the icecream in the state', () => {
        const newState = reducer(undefined, actions.addIcecream(flavors.FABADA, 33));
        expect(newState.iceCreams[flavors.FABADA]).toEqual(33);
    });
    
})
