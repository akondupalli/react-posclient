import {createStore} from 'redux'

const initialState = {
    newState: "initialized",
    newSubstate: "initial",
    itemCount: 0
}

const actionsList = ["WELCOME", "TOTALS", "PAYCOMPLETE"]

const reducer = ( state = initialState, action ) =>
{
    if ( actionsList.indexOf(action.type) !== -1 )
    {
        state = action.payload;
    }
    return state;
}

const store = createStore(reducer);

export default store;
