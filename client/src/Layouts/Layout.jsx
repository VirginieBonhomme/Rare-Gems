import React from 'react'
import Footer from '../Components/Footer/Footer.jsx';
import Navbar from '../Componets/Navbar/Navbar.jsx';
function Layout(props) {
  return (
    <>
      <main className="home-main">
        <Navbar />
        {props.children}
        <Footer />
      </main>

    </>
  )
}

export default Layout