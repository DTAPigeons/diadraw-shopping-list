import firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase'
import { firebaseConfig } from './config'

const fireBaseApp = firebase.initializeApp(firebaseConfig);

export const reduxSagaFirebase = new ReduxSagaFirebase(fireBaseApp);


