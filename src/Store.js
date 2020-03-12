import {createStore} from 'redux'

const initialState = {
    newState: "initialized",
    newSubstate: "initial",
    itemCount: 0
}

const actionsList = ["WELCOME", "ITEM", "TOTALS", "CANCEL", "PAYCOMPLETE"]

const reducer = ( state = initialState, action ) =>
{
    if ( actionsList.indexOf(action.type) !== -1 && action.payload)
    {
        state = action.payload;
    }
    return state;
}

const store = createStore(reducer);

export default store;
