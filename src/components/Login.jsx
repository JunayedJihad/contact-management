import React, { useEffect, useState } from 'react'
import { useLogin } from './../contexts/LoginContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLoginForm } from '../contexts/LoginForm';

function Login() {
  const[isLoggedIn,setIsLoggedIn]=useLogin()
  const [formData,setFormData]=useLoginForm()
  const[formMssg,setFormMssg]=useState('')
  const navigate=useNavigate()
  const[searchParam,setSearchParam]=useSearchParams()
  let alert=searchParam.get('alert')||''

  const[localFormData,setLocalFormData]=useState({
    username:'',
    password:''
  })

  const handleChange=(e)=>{
    setLocalFormData(prev=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    setIsLoggedIn(prev=>!prev)
    setFormData(localFormData)
    localStorage.setItem('formData',JSON.stringify(localFormData))
    if(!isLoggedIn){
      localStorage.setItem('isLoggedIn',true)

    }else{
      localStorage.removeItem('isLoggedIn')
    }
    !isLoggedIn ?
    setFormMssg('Logged In Successfully...'):
    setFormMssg('Logout Successful...')
    console.log(formData);
  }

  return (
    <div className='px-4 flex flex-col gap-4 justify-center items-center h-[90vh]'>
      {formMssg && <p className='text-2xl text-blue-200'>{formMssg}</p>}
      {(alert && !isLoggedIn) && <p className='text-2xl text-red-600'>{alert}</p>}
      {!isLoggedIn ? <form className='login-form w-[80%] max-w-lg px-4 py-4 flex flex-col justify-center gap-2' onSubmit={handleSubmit}>
        <p className='italic font-medium'>Username:</p>
        <input className='form-control' type="textl" name="username" onChange={handleChange}  />
        <p className='italic font-medium'>Password:</p>
        <input className='form-control' type="password" name="password" onChange={handleChange}  />
        <button className='align-self-center mt-4 bg-blue-400 hover:bg-blue-500 rounded py-1 px-2 font-mono'>Log In</button>
      </form>:
        <form onSubmit={handleSubmit}>
          <button className='align-self-center mt-4 bg-red-400 hover:bg-red-500 rounded py-1 px-2 font-mono' >Sign Out</button>
        </form>
      }
    </div>
  )
}

export default Login