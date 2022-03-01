import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div className="relative flex flex-wrap items-center justify-between px-2 py-3 text-white bg-black mb-3">
      {props.currentUser ?
        <>
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <h3 className="text-3xl  ">Welcome, {props.currentUser.username}!</h3>
            <button className="bg-[#06b6d4] text-white font-bold py-2 px-4 rounded" onClick={props.logout}>Log Out</button>
          </div>
        </>
        :
        <>
          <div>
            <Link to='/login' >Login</Link>
            <Link to='/signup'>Signup</Link>
          </div>
        </>
      }
      <Link to='/sneakers'>Home</Link>
      {/* <img src={image} height={100} width={100} /> */}
    </div>
  )
}