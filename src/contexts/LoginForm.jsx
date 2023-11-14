import { createContext, useContext, useState } from "react";

export const LoginForm=createContext()

export const LoginFormProvider=({children})=>{

     const[formData,setFormData]=useState({
          username:'',
          password:''
     })

     return(
          <LoginForm.Provider value={[formData,setFormData]}>
               {children}
          </LoginForm.Provider>
     )
}

export function useLoginForm(){
     return useContext(LoginForm)
}
