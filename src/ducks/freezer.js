export const actionTypes={
    UPDATE_TEMPERATURE: 'UPDATE_TEMPERATURE',
}

const DEFAULT_STATE = {
    temperature:0
}

//ACTIONS
export const actions = {
    updateTemperature(temperature){
        return{
            type: actionTypes.UPDATE_TEMPERATURE,
            temperature: temperature
        };
    }
}

//REDUCER
export default function reducer(state=DEFAULT_STATE, action){

}