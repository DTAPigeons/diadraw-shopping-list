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

export function selectItemFromDataBaseAction(id){
    return{
        type: actionTypes.SELECT_ITEM_FROM_DATA_BASE,
        payload: id
    }
}

export function selectItemFromDataBaseSuccessAction(item){
    return{
        type: actionTypes.SELECT_ITEM_FROM_DATA_BASE_SUCCESS,
        payload: item
    }
}

export function cleareUpdateItemAction(){
    return{
        type: actionTypes.CLEARE_UPDATE_ITEM
    }
}