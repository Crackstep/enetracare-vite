import { useState,useContext,createContext } from "react";

const AuthContext = createContext();

const AuthProvider = (props)=>{
    const [refreshToken,setRefreshToken] = useState('');
    const [role,setRole] = useState('user');

    return (
        <AuthContext.Provider value={{refreshToken,setRefreshToken,role,setRole}}>
            {props.children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export {AuthProvider,useAuth}
