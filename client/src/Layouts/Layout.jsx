import React from 'react'
import Footer from '../Components/Footer/Footer.jsx';
import Navbar from '../Componets/Navbar/Navbar.jsx';
function Layout(props) {
  return (
    <>
      <Navbar />
      <main className="home-main">
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout