import { takeEvery, call, put, all } from 'redux-saga/effects';
import { reduxSagaFirebase } from '../../firebase/database';
import { fetchCatalogSuccessAction } from '../actions/catalog-actions/actions';
import { FETCH_CATALOG} from '../actions/catalog-actions/action-types';
import { updateListItemSuccess } from '../actions/update-list-item-actions/actions';
import { UPDATE_LIST_ITEM } from '../actions/update-list-item-actions/action-types';
import { createCatalogItemCollectionFromDatabaseEntries } from '../../data/item-factory';
import { fetchCatalogSaga} from './catalog-sagas';

function* updateListItem(action){
    const item = action.payload;
    if(!item.key){
        let key = "";
      
        key = yield call(reduxSagaFirebase.database.create, 'shopingList', item);

        yield call(reduxSagaFirebase.database.patch,'shopingList/' + key, {key: key});

        yield put(updateListItemSuccess());
    }
}

export function* rootSaga(){
    yield all([
        takeEvery(FETCH_CATALOG, fetchCatalogSaga),
        takeEvery(UPDATE_LIST_ITEM, updateListItem)
    ]);
}