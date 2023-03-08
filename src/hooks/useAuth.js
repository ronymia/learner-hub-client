import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

export const useAuth = () => {
     return useContext(AuthContext)
}

