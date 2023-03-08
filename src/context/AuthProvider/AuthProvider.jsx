import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../../utility/firebase.config';



//creating AuthProvider Context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

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
     }, [])

     // auth information
     const authInfo = {
          user,
          loading,
          // providerLogin,
          createUser,
          signInUser,
          // updateUserProfile,
          // logOut
     };

     return (
          <AuthContext.Provider value={authInfo} >
               {children}
          </AuthContext.Provider>
     );
}

export default AuthProvider;
