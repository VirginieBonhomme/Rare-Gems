import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div className="bg-gray-800 text-white items-baseline space-x-4 h-16">
      {props.currentUser ?
        <>
          <h3 className="text-3xl ">Welcome, {props.currentUser.username}!</h3>
          <button onClick={props.logout}>Log Out</button>
        </>
        :
        <>
          <Link to='/login' >Login</Link>
          <Link to='/signup'>Signup</Link>

        </>
      }
      <Link to='/sneakers'>Home</Link>
    </div>
  )
}