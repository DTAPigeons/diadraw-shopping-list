import { takeEvery, call, put, all, takeLatest } from 'redux-saga/effects';
import { FETCH_CATALOG, SYNC_CATALOG} from '../actions/catalog-actions/action-types';
import { UPDATE_LIST_ITEM } from '../actions/update-list-item-actions/action-types';
import { FETCH_SHOPPING_LIST, SYNC_SHOPPING_LIST, DELECT_SHOPPING_LIST_ITEM, MARK_ITEM_AS_BOUGHT} from '../actions/shopping-list-actions/action-types';
import { fetchCatalogSaga, syncCatalogSaga} from './catalog-sagas';
import { updateListItemSaga, fetchShoppingListSaga, syncShoppingListSaga, deleteShoppingItemSaga, markItemAsBoughtSaga} from './list-item-sagas';
import { syncCatalogAction } from '../actions/catalog-actions/actions';
import { syncShoppingListAction } from '../actions/shopping-list-actions/actions';

export function* rootSaga(){
    yield all([
        takeEvery(FETCH_CATALOG, fetchCatalogSaga),
        takeEvery(UPDATE_LIST_ITEM, updateListItemSaga),
        takeEvery(FETCH_SHOPPING_LIST, fetchShoppingListSaga),
        takeEvery(DELECT_SHOPPING_LIST_ITEM, deleteShoppingItemSaga),
        takeEvery(MARK_ITEM_AS_BOUGHT, markItemAsBoughtSaga),
        takeLatest(SYNC_CATALOG, syncCatalogSaga),
        takeLatest(SYNC_SHOPPING_LIST, syncShoppingListSaga)
    ]);

    yield put(syncShoppingListAction());
    yield put(syncCatalogAction());

}