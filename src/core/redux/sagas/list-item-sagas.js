import {  call, put } from 'redux-saga/effects';
import { reduxSagaFirebase } from '../../firebase/database';
import { updateListItemSuccess } from '../actions/update-list-item-actions/actions';

export function* updateListItemSaga(action){
    const item = action.payload;
    if(!item.key){
        let key = "";
      
        key = yield call(reduxSagaFirebase.database.create, 'shopingList', item);

        yield call(reduxSagaFirebase.database.patch,'shopingList/' + key, {key: key});

        yield put(updateListItemSuccess());
    }
}