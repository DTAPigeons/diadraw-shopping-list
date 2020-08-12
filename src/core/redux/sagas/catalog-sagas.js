import { reduxSagaFirebase } from '../../firebase/database';
import { fetchCatalogSuccessAction } from '../actions/catalog-actions/actions';
import { createCatalogItemCollectionFromDatabaseEntries } from '../../firebase/data/item-factory';
import {  call, put } from 'redux-saga/effects';

export function* fetchCatalogSaga(){
    const result = yield call(reduxSagaFirebase.database.read, 'catalog');
    const catalog = createCatalogItemCollectionFromDatabaseEntries(result);
    yield put(fetchCatalogSuccessAction(catalog));
}