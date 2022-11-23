import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext()

const UserContext = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserName = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () =>{
        
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged( auth, currentUser=> {
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe()
        }
    },[])


    const info={
        user,
        loading,
        createUser,
        logInUser,
        logOutUser

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;