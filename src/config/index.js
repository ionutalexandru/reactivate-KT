import {config} from './config';
import firebase from 'firebase/app'
import '@firebase/firestore'

firebase.initializeApp(config);

const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);

export {db};