import { createContext, useState } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
const [isAuth,setAuth]=useState(false);



const handleAuth=(value)=>{
setAuth(value);
}
return (<AuthContext.Provider value={{isAuth,handleAuth}}>
    {children}
</AuthContext.Provider>)

}