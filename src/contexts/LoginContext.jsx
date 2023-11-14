import { createContext, useContext, useState } from "react";

export const LoginContext=createContext()

export const LoginContextProvider=({children})=>{

     const[isLoggedIn,setIsLoggedIn]=useState(localStorage.getItem('isLoggedIn')||false)

     return(
          <LoginContext.Provider value={[isLoggedIn,setIsLoggedIn]}>
               {children}
          </LoginContext.Provider>
     )
}

export function useLogin(){
     return useContext(LoginContext)
}
