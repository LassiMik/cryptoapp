// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';

//firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCa6KZL-kP4zRFCHxxjzNJEXcn5BvN6a8s",
  authDomain: "cryptoapp-89dcb.firebaseapp.com",
  projectId: "cryptoapp-89dcb",
  storageBucket: "cryptoapp-89dcb.appspot.com",
  messagingSenderId: "995567234389",
  appId: "1:995567234389:web:6f1537ee5e9dff522753dc",
  measurementId: "G-D2E86CNRCE"
};
//initialize firebase
const app = initializeApp(firebaseConfig)

//get auth
const auth = getAuth(app);

//get db
const db = getFirestore(app);

export { auth, db };
