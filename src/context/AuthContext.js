import React, { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}


export function AuthProvider(props) {

    const [authUser, setAuthUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const getLoggedUser = JSON.parse(window.sessionStorage.getItem('authUser'));
        if (getLoggedUser !== null) { setAuthUser(getLoggedUser); setIsLoggedIn(true); }
    }, []);



    const value = { authUser, setAuthUser, isLoggedIn, setIsLoggedIn };

    return (
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    )

}
