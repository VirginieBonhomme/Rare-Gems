import React from 'react'
import Logo from '../assets/Octocat.png'

function Footer() {
  return (
    <footer className=" bg-black text-white h-24 justify-center">
      <a href="https://github.com/virginiebonhomme">
        <img src={Logo} height={80} width={80} />
      </a>
    </footer>
  )
}

export default Footer