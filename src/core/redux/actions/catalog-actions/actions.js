import { FETCH_CATALOG} from './action-types';
import { FETCH_CATALOG_SUCCESS} from './action-types';


export function fetchCatalogSuccessAction(catalog){
    return {
        type: FETCH_CATALOG_SUCCESS,
        payload: catalog
    }
}

export function fetchCatalogAction(){
    return {type: FETCH_CATALOG};
}