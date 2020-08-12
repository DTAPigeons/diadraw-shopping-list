import * as actionTypes from './action-types';

export function itemSelectedAction(item){
    return {
        type: actionTypes.ITEM_SELECTED,
        payload: item
    }
}

export function updateListItemAction(item){
    return {
        type: actionTypes.UPDATE_LIST_ITEM,
        payload: item
    }
}

export function updateListItemSuccessAction(){
    return{
        type: actionTypes.UPDATE_LIST_ITEM_SUCCESS
    }
}