import { FETCH_SHOPPING_LIST_SUCCESS, SELECT_SHOPPING_LIST_ITEM, DELECT_SHOPPING_LIST_ITEM_SUCCES } from '../actions/shopping-list-actions/action-types';

const initialState = {
    shoppingList: [],
    selectedItem: undefined
};

export function shoppingListReducer(state=initialState, action){
    switch(action.type){
        case FETCH_SHOPPING_LIST_SUCCESS:
            return {...state, shoppingList: action.payload};
        case SELECT_SHOPPING_LIST_ITEM:
            return {...state, selectedItem: action.payload};
        case DELECT_SHOPPING_LIST_ITEM_SUCCES:
            return {...state, selectedItem: undefined};
        default:
            return state
    }
}