import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: 'ruck-clothing.firebaseapp.com',
  projectId: 'ruck-clothing',
  storageBucket: 'ruck-clothing.appspot.com',
  messagingSenderId: '192225351017',
  appId: '1:192225351017:web:b117326bac49cf00fb19f8',
  measurementId: 'G-87F5YW2M0Q',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
