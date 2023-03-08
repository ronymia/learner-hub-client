import {
     createUserWithEmailAndPassword,
     onAuthStateChanged,
     signInWithEmailAndPassword,
     signInWithPopup,
     signOut
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../utility/firebase.config';



//creating AuthProvider Context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     //provider login
     const providerLogin = (provider) => {
          setLoading(true);
          return signInWithPopup(auth, provider);
     }

     //create new user 
     const createUser = (email, password) => {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password);
     }

     // exist user log in
     const signInUser = (email, password) => {
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password);
     }

     //log out user
     const logOutUser = () => {
          return signOut(auth);
     }


     // components will unmount
     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
               console.log("inside auth state change", currentUser);
               setUser(currentUser);
               setLoading(false);
          })
          return () => {
               unsubscribe();
          };
     }, []);

     // auth information
     const authInfo = {
          user,
          loading,
          providerLogin,
          createUser,
          signInUser,
          logOutUser
     };

     return (
          <AuthContext.Provider value={authInfo} >
               {children}
          </AuthContext.Provider>
     );
}

export default AuthProvider;
