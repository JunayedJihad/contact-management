import { createContext, useContext } from "react";

export const ContactContext=createContext({
     contacts:[{
          id:1,
          first_name:"Junayed",
          last_name:"Jihad",
          email:'cadetjunayed48@gmail.com',
          phone:'01318753500',
          isFavourite:false
     }],
     addContact:(contact)=>{},
     updateContact:(id,contact)=>{},
     deleteContact:(id)=>{},
     toggleFavourite:(id)=>{}
})
export const ContactContextProvider=ContactContext.Provider

export function useContactContext(){
     return useContext(ContactContext)
}