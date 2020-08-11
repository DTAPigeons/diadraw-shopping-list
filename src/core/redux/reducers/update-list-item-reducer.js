import { ITEM_SELECTED, UPDATE_LIST_ITEM_SUCCESS } from '../actions/update-list-item-actions/action-types';

const initialState = {
    selectedItem : { name: "", bought: false},
    updated: false
};

export function updateListItemReducer(state = initialState, action){
    switch(action.type){
        case ITEM_SELECTED:
            return {...state, selectedItem : action.payload};
        case UPDATE_LIST_ITEM_SUCCESS:
            return {...state, updated: true}
        default:
            return state;
    }
}