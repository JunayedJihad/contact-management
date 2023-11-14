import React, { useEffect, useState } from 'react'
import { useLogin } from './../contexts/LoginContext';
import { useNavigate } from 'react-router-dom';
import { useContactContext } from '../contexts/ContactContext';
import { nanoid } from 'nanoid';

function NewContact() {
  const [isLoggedIn,setIsLoggedIn]=useLogin()
  const {addContact}=useContactContext()
  const navigate=useNavigate()
  const [formData,setFormData]=useState({
    first_name:'',
    last_name:'',
    email:'',
    phone:''
  })
  const handleChange=(e)=>{
    setFormData(prev=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(formData)
    addContact({
      id:nanoid(3),
      isFavourite:false,
      ...formData
    })
    // setFormData({
    //   first_name:'',
    //   last_name:'',
    //   email:'',
    //   phone:''
    // })
  }
 useEffect(()=>{
  if(!isLoggedIn){
    return navigate('/login?alert=Login first to continue')
  }
 },[])
  return (
    <div className='px-3 flex justify-center items-center h-[90vh]'>
     <form onSubmit={handleSubmit} className='form px-3 w-[80%] max-w-lg  py-8 font-[poppins]'>
          <p>First Name:</p>
          <input className='mt-1 mb-1 form-control' onChange={handleChange} type="text" name="first_name" required />
          <p>Last Name:</p>
          <input className='mt-2 mb-1 form-control' onChange={handleChange} type="text" name="last_name" required />
          <p>Email Address:</p>
          <input className='mt-2 mb-1 form-control' onChange={handleChange} type="email" name="email" />
          <p>Mobile No:</p>
          <input className='mt-2 mb-1 form-control' onChange={handleChange} type="number" name="phone" required />
          <button className='border-2 border-blue-500 rounded-3xl duration-300 hover:bg-blue-400 px-3 py-2 mt-3'>Add to Contacts</button>
     </form>
    </div>
  )
}

export default NewContact