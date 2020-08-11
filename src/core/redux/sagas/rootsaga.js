import { takeEvery, call, put, all } from 'redux-saga/effects';
import { reduxSagaFirebase } from '../../firebase/database';
import { fetchCatalogSuccessAction } from '../actions/catalog-actions/fetch-catalog-success-action';
import { FETCH_CATALOG, FETCH_CATALOG_SUCCESS } from '../actions/catalog-actions/action-types';
import { UPDATE_LIST_ITEM } from '.././actions/update-list-item-actions/action-types';

function* fetchCatalogSaga(){
    const result = yield call(reduxSagaFirebase.database.read, 'catalog');
    yield put({
        type: FETCH_CATALOG_SUCCESS,
        payload: result
    });
}

function* updateListItem(action){
    const item = action.payload;
    if(!item.key){
        let key = "";
      
        key = yield call(reduxSagaFirebase.database.create, 'shopingList', { name: item.name });

        yield call(reduxSagaFirebase.database.patch,'shopingList/' + key, {key: key});
    }
}

export function* rootSaga(){
    yield all([
        takeEvery(FETCH_CATALOG, fetchCatalogSaga),
        takeEvery(UPDATE_LIST_ITEM, updateListItem)
    ]);
}