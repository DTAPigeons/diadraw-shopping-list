import { FETCH_CATALOG} from './action-types';


export function fetchCatalogAction(){
    return dispatch =>{
        dispatch({
            type: FETCH_CATALOG
        });
    }
}