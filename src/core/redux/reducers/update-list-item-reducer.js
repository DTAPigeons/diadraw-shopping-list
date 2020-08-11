import { ITEM_SELECTED } from '../actions/update-list-item-actions/action-types';

const initialState = {
    selectedItem : { name: ""}
};

export function updateListItemReducer(state = initialState, action){
    switch(action.type){
        case ITEM_SELECTED:
            return {...state, selectedItem : action.payload};
        default:
            return state;
    }
}