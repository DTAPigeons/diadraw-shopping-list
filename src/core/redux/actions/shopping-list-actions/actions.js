import * as types from './action-types';

export function fetchShoppingListAction(){
    return{
        type: types.FETCH_SHOPPING_LIST
    };
}

export function fetchShoppingListSuccessAction(shoppingList){
    return{
        type: types.FETCH_SHOPPING_LIST_SUCCESS,
        payload: shoppingList
    }
}

export function syncShoppingListAction() {
    return{
        type: types.SYNC_SHOPPING_LIST
    };
}

export function syncShoppingListStopAction(params) {
    return{
        type: types.SYNC_SHOPPING_LIST_STOP
    };
}