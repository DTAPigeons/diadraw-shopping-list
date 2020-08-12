import { reduxSagaFirebase } from '../../firebase/database';
import { fetchCatalogSuccessAction, fetchCatalogAction } from '../actions/catalog-actions/actions';
import { createCatalogItemCollectionFromDatabaseEntries } from '../../firebase/data/item-factory';
import {  call, put, fork, take, cancel } from 'redux-saga/effects';
import { SYNC_CATALOG_STOP } from '../actions/catalog-actions/action-types';

export function* fetchCatalogSaga(){
    const result = yield call(reduxSagaFirebase.database.read, 'catalog');
    const catalog = createCatalogItemCollectionFromDatabaseEntries(result);
    yield put(fetchCatalogSuccessAction(catalog));
}

export function* syncCatalogSaga() {
   let task = yield fork(reduxSagaFirebase.database.sync, 'catalog',
    {
        successActionCreator: fetchCatalogAction
    });

    yield take(SYNC_CATALOG_STOP);

    yield cancel(task);
}

