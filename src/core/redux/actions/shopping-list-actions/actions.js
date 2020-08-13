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

export function syncShoppingListStopAction() {
    return{
        type: types.SYNC_SHOPPING_LIST_STOP
    };
}

export function selectShoppingItemAction(item) {
    return{
        type: types.SELECT_SHOPPING_LIST_ITEM,
        payload: item
    };
}

export function  deleteShoppingListItemAction(item) {
    return{
        type: types.DELECT_SHOPPING_LIST_ITEM,
        payload: item
    };
}

export function deleteShoppingListItemSuccesAction() {
    return{
        type: types.DELECT_SHOPPING_LIST_ITEM_SUCCES
    };
}

export function markItemAsBoughtAction(item) {
    return{
        type: types.MARK_ITEM_AS_BOUGHT,
        payload: item
    };
}

export function markItemAsBoughtSuccessAction() {
    return{
        type: types.MARK_ITEM_AS_BOUGHT_SUCCESS
    };
}

export function clearSelectionAction(){
    return{
        type: types.CLEAR_SELECTION
    }
}