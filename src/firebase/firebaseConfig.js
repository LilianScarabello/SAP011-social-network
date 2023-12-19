import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBm7J_Q_iiyZor9q0rM-C-P9BvAwsgvluc',
  authDomain: 'sweethub-6de73.firebaseapp.com',
  projectId: 'sweethub-6de73',
  storageBucket: 'sweethub-6de73.appspot.com',
  messagingSenderId: '774515462621',
  appId: '1:774515462621:web:4f41d1abc9813757a06634',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
