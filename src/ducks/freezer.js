export const actionTypes={
    UPDATE_TEMPERATURE: 'UPDATE_TEMPERATURE',
    ADD_ICECREAM: 'ADD_ICECREAM',
}

const MAX_AMOUNT_PER_ICECREAM = 100;

const DEFAULT_STATE = {
    temperature:0,
    iceCreams:{},
}


//ACTIONS
export const actions = {
    updateTemperature(temperature){
        return{
            type: actionTypes.UPDATE_TEMPERATURE,
            payload: temperature
        };
    },

    addIcecream(flavor, amount){
        return{
                type:actionTypes.ADD_ICECREAM,
                payload : {flavor:flavor, amount:amount}
        }
    }
}

//REDUCER
export default function reducer(state=DEFAULT_STATE, action={}){
    switch(action.type){
        case actionTypes.UPDATE_TEMPERATURE:
            return {
                ...state, 
                temperature : action.payload,
            }
        case actionTypes.ADD_ICECREAM:
        const newAmount = action.payload.amount + (state.iceCreams[action.payload.flavor] || 0)
            return {
                ...state,
                iceCreams: {
                    ...state.iceCreams,
                    [action.payload.flavor]: Math.min(newAmount, MAX_AMOUNT_PER_ICECREAM),

                }
            }
        default:  
            return state;
        }
}