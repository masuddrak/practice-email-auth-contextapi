import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.cofig";

export const firbaseContext = createContext()

const FirebaseComponent = ({ children }) => {
    const [spiUser,setSpiUser]=useState()
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logoutUers=()=>{
        return signOut(auth)
    }
    // manage users 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
               setSpiUser(user.email)
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])
    const authUsers = { createUser,spiUser,logoutUers }
    return (
        <firbaseContext.Provider value={authUsers}>
            {children}
        </firbaseContext.Provider>
    );
};

export default FirebaseComponent;
FirebaseComponent.propTypes = {
    children: PropTypes.node
}