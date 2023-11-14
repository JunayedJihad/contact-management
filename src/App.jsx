import React, { useEffect, useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import NewContact from "./components/NewContact";
import Login from "./components/Login";
import { LoginContextProvider } from "./contexts/LoginContext";
import { LoginFormProvider } from "./contexts/LoginForm";
import SingleContact from "./components/SingleContact";
import { ContactContextProvider } from "./contexts/ContactContext";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(()=>{
    const contacts=JSON.parse(localStorage.getItem('contacts'))
    if(contacts && contacts.length>0) {
      setContacts(contacts)
    }
  },[])


  useEffect(()=>{
    localStorage.setItem('contacts',JSON.stringify(contacts))
  },[contacts])


  const addContact=(contact)=>{
    setContacts(prev=>[{...contact},...prev])
  }
  const deleteContact=(id)=>{
    setContacts(prev=>prev.filter(each=>each.id!==id))
  }
  const updateContact=(id,contact)=>{
    setContacts(prev=>prev.map(each=>each.id===id?contact:each))
  }
  const toggleFavourite=(id)=>{
    setContacts(prev=>prev.map(each=>each.id===id?{...each,isFavourite:!each.isFavourite}:each))
  }





  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="newContact" element={<NewContact />} />
        <Route path="contact/:id" element={<SingleContact />} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );
  return (
    <LoginContextProvider>
      <ContactContextProvider value={{contacts,addContact,updateContact,deleteContact,toggleFavourite}}>
        <LoginFormProvider>
          <RouterProvider router={router} />
        </LoginFormProvider>
      </ContactContextProvider>
    </LoginContextProvider>
  );
}

export default App;
