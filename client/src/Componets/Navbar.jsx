import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/RareGemsLogo.png'

export default function Navbar(props) {
  return (
    <div className="relative flex flex-wrap items-center justify-between px-2 py-3 text-white bg-black mb-3">
      <div className='flex-row-reverse'>
        <Link
          to='/sneakers'>
          <img src={Logo} height={120} width={120} />
        </Link>

      </div>
      {props.currentUser ?
        <>
          <div>
            <div className="w-full relative space-y-10ß  flex p-10 justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <h3 className="text-3xl  mr-10 ">Welcome, {props.currentUser.username}!</h3>
              <button className="bg-[#06b6d4] text-white font-bold py-2 px-4 rounded" onClick={props.logout}>Log Out</button>
            </div>
          </div>
        </>
        :
        <>
          <div>
            <Link
              to='/login'
              className="bg-[#06b6d4] text-white font-bold py-2 px-4 rounded"
            >Login</Link>
            <Link
              to='/signup'>Signup</Link>
          </div>
        </>
      }

      {/* <Link
        className="bg-[#06b6d4] text-white font-bold py-2 px-4 rounded"
        to='/sneakers'>Home</Link> */}
    </div>
  )
}