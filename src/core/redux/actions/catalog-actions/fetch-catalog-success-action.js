import { FETCH_CATALOG_SUCCESS} from './action-types';


export function fetchCatalogSuccessAction(catalog){
    return dispatch =>{
        dispatch({
            type: FETCH_CATALOG_SUCCESS,
            payload: catalog
        });
    }
}