import { FETCH_SHOPPING_LIST_SUCCESS } from '../actions/shopping-list-actions/action-types';

const initialState = {
    shopingList: [],
    selectedItem: undefined
}

export function shoppingListReducer(state=initialState, action){
    switch(action.type){
        case FETCH_SHOPPING_LIST_SUCCESS:
            return {...state, shopingList: action.payload};
    }
}