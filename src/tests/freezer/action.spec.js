import reducer, {actionTypes, actions, store} from "../../ducks/freezer";
import * as flavors from "../../constants/icecreams_flavors";


describe('updateTemperature', () =>{
    it('should return the right action type', () => {
        const action = actions.updateTemperature();
        expect(action.type).toEqual(actionTypes.UPDATE_TEMPERATURE);
    });

    it('should contain the temperature in the temperature', () => {
        const action = actions.updateTemperature(-6);
        expect(action.payload).toEqual(-6);
    });
    
});

describe ('addIcecream', () => {
    it('should contain the right action type', () => {
        const action = actions.addIcecream();
        expect(action.type).toEqual(actionTypes.ADD_ICECREAM);
    });
    it('should have flavor in the payload', () => {
        const action = actions.addIcecream('test flavor');
        expect (action.payload.flavor).toEqual('test flavor');
    });
    it('should have amount in the payload', () => {
        const action = actions.addIcecream('test flavor',66);
        expect (action.payload.amount).toEqual(66);
    });
})