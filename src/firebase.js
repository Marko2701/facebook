import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCKjxt-naHGrekdBmDLlDCjW2J0EyyD7fE',
  authDomain: 'facebook-clone-119c4.firebaseapp.com',
  projectId: 'facebook-clone-119c4',
  storageBucket: 'facebook-clone-119c4.appspot.com',
  messagingSenderId: '392025869736',
  appId: '1:392025869736:web:0b0c2598017bce5f9d619d',
  measurementId: 'G-R9EDZ4FEPT'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;