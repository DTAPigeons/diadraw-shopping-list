import { takeEvery, call, put, all } from 'redux-saga/effects';
import { reduxSagaFirebase } from '../../firebase/database';
import { fetchCatalogSuccessAction } from '../actions/catalog-actions/fetch-catalog-success-action';
import { FETCH_CATALOG, FETCH_CATALOG_SUCCESS } from '../actions/catalog-actions/action-types';

function* fetchCatalogSaga(){
    const result = yield call(reduxSagaFirebase.database.read, 'catalog');
    yield put({
        type: FETCH_CATALOG_SUCCESS,
        payload: result
    });
}

export function* rootSaga(){
    yield all([
        takeEvery(FETCH_CATALOG, fetchCatalogSaga)
    ])
}