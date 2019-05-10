import {actionTypes, actions} from "../../ducks/freezer";
import { isTSAnyKeyword, exportAllDeclaration } from "@babel/types";

describe('updateTemperature', () =>{
    it('should return the right action type', () => {
        const action = actions.updateTemperature();
        expect(action.type).toEqual(actionTypes.UPDATE_TEMPERATURE);
    });
});

it('should contain the temperature in the temperature', () => {
    const action = actions.updateTemperature(-6);
    expect(action.temperature).toEqual(-6);
});

it('should store the temperature in the state')