import * as firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyAZi-JvTfqvaVofUDRx2pFYVcCRJ8xmlxA',
  authDomain: 'firegram-3149b.firebaseapp.com',
  projectId: 'firegram-3149b',
  storageBucket: 'firegram-3149b.appspot.com',
  messagingSenderId: '575787938888',
  appId: '1:575787938888:web:4d5d301d01b31abcc7547d',
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
