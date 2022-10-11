import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCGRJL2c6731L5y8UxYsmjHY14DQ5sG0UA",
  authDomain: "cueva-1234.firebaseapp.com",
  projectId: "cueva-1234",
  storageBucket: "cueva-1234.appspot.com",
  messagingSenderId: "79892740822",
  appId: "1:79892740822:web:a61760cacd16ab8797e777"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)