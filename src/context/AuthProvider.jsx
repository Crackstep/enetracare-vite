import { useState,useContext,createContext } from "react";

const AuthContext = createContext();

const AuthProvider = (props)=>{
    const [refreshToken,setRefreshToken] = useState('');

    return (
        <AuthContext.Provider value={{refreshToken,setRefreshToken}}>
            {props.children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export {AuthProvider,useAuth}
