import React, { useState } from 'react'
import data from '../data'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  const[searchData,setSearchData]=useState('')
  const contacts=JSON.parse(localStorage.getItem('contacts'))||[]
  console.log(contacts);
  return (
    <div className='h-[90vh] sidebar overflow-scroll py-3 px-3 bg-slate-300 '>
      <form>
        <input type="text" value={searchData} onChange={(e)=>{setSearchData(e.target.value)}} className=' py-2 form-control' placeholder='Search Here...' />
      </form>


      <div className="contact-list mt-4">
        {contacts.filter(item=>(
          searchData.toLowerCase()===''?item:item.first_name.toLowerCase().includes(searchData)
        )).map(item=>(
         <NavLink key={item.id} to={`/contact/${item.id}`}>
           <div className=" contact-item mb-2 px-2 py-1 px-lg-4 py-lg-2 rounded flex justify-between items-center">
          <div className="flex justify-center items-center contact-img w-12 h-12 lg:mr-4 overflow-hidden rounded-full bg-blue-500">
            <img src={item.image} alt="" />
          </div>
          <div className="contact-info">
            <p className='font-medium'>{`${item.first_name} `}{item.last_name}</p>
            <p className='font-light text-slate-500'>{item.phone}</p>
          </div>
          <div className="contact-icon text-[#f1c40f]">
            {item.isFavourite?(<i className="fa-solid fa-star"></i>):(<i className="fa-regular fa-star"></i>)}
          </div>
          </div>
         </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Sidebar