import {  call, put, fork, take, cancel } from 'redux-saga/effects';
import { reduxSagaFirebase } from '../../firebase/database';
import { updateListItemSuccessAction, updateListItemAction } from '../actions/update-list-item-actions/actions';
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
    const item = action.payload;
    const entry = createDatabaseEntryFromItem(item);
    if(!item.id){
        yield call(reduxSagaFirebase.database.create, 'shopingList', entry);
    }
    else{
        yield call(reduxSagaFirebase.database.patch, 'shopingList'+'/'+item.id, entry);
    }

    yield put(updateListItemSuccessAction());
}

export function* deleteShoppingItemSaga(action) {
    yield call(reduxSagaFirebase.database.delete, 'shopingList'+'/'+action.payload.id);
    yield put(deleteShoppingListItemSuccesAction());
}

export function* fetchShoppingListSaga(){
    const result = yield call(reduxSagaFirebase.database.read, 'shopingList');
    const shopingList = createShoppingListCollectionFromDatabaseEntries(result);
    yield put(fetchShoppingListSuccessAction(shopingList));
}

export function* syncShoppingListSaga() {
    let task = yield fork(reduxSagaFirebase.database.sync, 'shopingList',
    {
        successActionCreator: fetchShoppingListAction
    });

    yield take(SYNC_SHOPPING_LIST_STOP);

    yield cancel(task);
}