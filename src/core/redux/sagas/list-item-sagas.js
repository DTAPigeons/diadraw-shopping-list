import {  call, put, fork, take, cancel } from 'redux-saga/effects';
import { reduxSagaFirebase, SHOPPING_LIST_PATH } from '../../firebase/database';
import { updateListItemSuccessAction, updateListItemAction, selectItemFromDataBaseSuccessAction } from '../actions/update-list-item-actions/actions';
import { createShoppingListCollectionFromDatabaseEntries, createDatabaseEntryFromItem } from '../../firebase/data/item-factory';
import { fetchShoppingListSuccessAction, fetchShoppingListAction, deleteShoppingListItemSuccesAction, markItemAsBoughtSuccessAction } from '../actions/shopping-list-actions/actions';
import { SYNC_SHOPPING_LIST_STOP } from '../actions/shopping-list-actions/action-types';

export function* markItemAsBoughtSaga(action){
    const item = action.payload;
    item.bought = true;
    yield put(updateListItemAction(item));
    yield put(markItemAsBoughtSuccessAction());
}

export function* updateListItemSaga(action){
    const entry = action.payload.entry;
    if(!action.payload.id){
        yield call(reduxSagaFirebase.database.create, SHOPPING_LIST_PATH, entry);
    }
    else{
        yield call(reduxSagaFirebase.database.patch, SHOPPING_LIST_PATH+'/'+action.payload.id, entry);
    }

    yield put(updateListItemSuccessAction());
}

export function* deleteShoppingItemSaga(action) {
    yield call(reduxSagaFirebase.database.delete, SHOPPING_LIST_PATH+'/'+action.payload.id);
    yield put(deleteShoppingListItemSuccesAction());
}

export function* fetchShoppingListSaga(){
    const result = yield call(reduxSagaFirebase.database.read, SHOPPING_LIST_PATH);
    yield put(fetchShoppingListSuccessAction(result));
}

export function* fetchItemFromDataBaseSaga(action){
    const result = yield call(reduxSagaFirebase.database.read, SHOPPING_LIST_PATH + '/'+action.payload);
    result.id = action.payload;

    yield put(selectItemFromDataBaseSuccessAction(result));
}

export function* syncShoppingListSaga() {
    let task = yield fork(reduxSagaFirebase.database.sync, SHOPPING_LIST_PATH,
    {
        successActionCreator: fetchShoppingListSuccessAction
    });

    yield take(SYNC_SHOPPING_LIST_STOP);

    yield cancel(task);
}