import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoipsum-226 (1).svg";
import { useLoginForm } from "../contexts/LoginForm";

function Header() {
  const[formData,setFormData]=useLoginForm()
  let username=JSON.parse(localStorage.getItem('formData')).username
  // console.log(username);

  return (
    <div className=" shadow  px-4 font-[poppins]">
      <div className=" h-[10vh] flex justify-between items-center">
        <NavLink to='/' className="logo flex gap-2 justify-center items-center">
          <img src={logo} alt="" />
          <span className="text-2xl font-[500]">ContactX</span>
        </NavLink>
        <nav className="flex items-center justify-center gap-3">
          <NavLink to="/newContact">Add Contact</NavLink>
          <NavLink className=' duration-300 hover:bg-red-200 border-2 border-red-400 py-[.2rem] px-3 rounded-3xl' to="/login">{username?username:'Login'}</NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Header;
