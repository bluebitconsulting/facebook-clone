import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuagCAmxzSBjrqhQhIwly3G7dukaIwO-I",
  authDomain: "facebook-clone-7f6bc.firebaseapp.com",
  projectId: "facebook-clone-7f6bc",
  storageBucket: "facebook-clone-7f6bc.appspot.com",
  messagingSenderId: "781248131572",
  appId: "1:781248131572:web:30b28eb347807b972189a1",
  measurementId: "G-L63N1SFM9X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider};
export default db;