import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div className="flex space-x-4 flex-row-reverse px-10 ">
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