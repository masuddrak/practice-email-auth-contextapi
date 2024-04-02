import { createContext, useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.cofig";


export const firbaseContext = createContext()

const FirebaseComponent = ({ children }) => {
    const [myPopup, setMyPopup] = useState()
    const [spiUser, setSpiUser] = useState(null)
    const setTimeOutRef = useRef()
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logoutUers = () => {
        return signOut(auth)
    }
    // manage users 
    useEffect(() => {
        const observerID = onAuthStateChanged(auth, (user) => {
            console.log(user,"user vistef")
            setSpiUser(user)
            if (user) {
                clearInterval(setTimeOutRef.current)
                console.log(user)
                
            } else {
                // User is signed out
                // ...
            }
        });
        return () => {
            observerID()
        }
    }, [])

    const popu = <>
        <h1 className="text-7xl">please login</h1>
    </>


    useEffect(() => {
        const setItmeID = setInterval(() => {
            setMyPopup(popu.props.children.props.children
            )

        }, 2000)
        setTimeOutRef.current = setItmeID
    }, [])
    // console.log(myPopup)
    const authUsers = { createUser, spiUser, logoutUers, loginUser, setSpiUser, myPopup }
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