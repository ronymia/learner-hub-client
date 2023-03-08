import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
     apiKey: REACT_APP_apiKey,
     authDomain: REACT_APP_authDomain,
     projectId: REACT_APP_projectId,
     storageBucket: REACT_APP_storageBucket,
     messagingSenderId: REACT_APP_messagingSenderId,
     appId: REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);