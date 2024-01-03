import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBoYxL79XiZBPGDYidsoHFX__HENKkO6Z0",
  authDomain: "reactapp-35644.firebaseapp.com",
  projectId: "reactapp-35644",
  storageBucket: "reactapp-35644.appspot.com",
  messagingSenderId: "504908103795",
  appId: "1:504908103795:web:e27553cb21bc677df32a06",
  measurementId: "G-GZYYX4TCV5"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)


