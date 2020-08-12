import { takeEvery, call, put, all } from 'redux-saga/effects';
import { FETCH_CATALOG} from '../actions/catalog-actions/action-types';
import { UPDATE_LIST_ITEM } from '../actions/update-list-item-actions/action-types';
import { fetchCatalogSaga} from './catalog-sagas';
import { updateListItemSaga} from './list-item-sagas';

export function* rootSaga(){
    yield all([
        takeEvery(FETCH_CATALOG, fetchCatalogSaga),
        takeEvery(UPDATE_LIST_ITEM, updateListItemSaga)
    ]);
}