import { FETCH_SHOPPING_LIST_SUCCESS } from '../actions/shopping-list-actions/action-types';

const initialState = {
    shoppingList: [],
    selectedItem: { name:""}
};

export function shoppingListReducer(state=initialState, action){
    switch(action.type){
        case FETCH_SHOPPING_LIST_SUCCESS:
            return {...state, shoppingList: action.payload};
        default:
            return state
    }
}