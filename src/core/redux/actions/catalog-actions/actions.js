import * as types from './action-types';


export function fetchCatalogSuccessAction(catalog){
    return {
        type: types.FETCH_CATALOG_SUCCESS,
        payload: catalog
    }
}

export function fetchCatalogAction(){
    return {type: types.FETCH_CATALOG};
}

export function syncCatalogAction() {
    return {type: types.SYNC_CATALOG};    
}

export function syncCatalogStopAction() {
    return {type: types.SYNC_CATALOG_STOP};
}