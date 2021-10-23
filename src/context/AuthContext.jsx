import React, { useEffect, useState } from "react";

import {onAuthStateChanged, getAuth, User, onIdTokenChanged} from "firebase/auth";
//import {Ob} from "firebase/u"
//import firebase from "firebase";

export const AuthContext = React.createContext(null);

export function AuthContextProvider(props) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(getAuth(),(authUser) => {
            setUser(authUser);
        });
    }, [])
    return (
        <AuthContext.Provider value = {{user}}>
            {props.children}
        </AuthContext.Provider>
    );
}