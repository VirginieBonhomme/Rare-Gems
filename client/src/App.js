import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { verifyUser } from './Services/users.js';
import SneakersContainer from './Containers/SneakerContainer.jsx';
import Navbar from './Componets/Navbar';
import Login from './Componets/Login';
import Signup from './Componets/Signup';


function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser()
      setCurrentUser(user)
    }
    getUser()
  }, [])

  const logout = () => {
    localStorage.removeItem('authToken')
    setCurrentUser(null)
  }



  return (
    <div className="App">
      <Navbar currentUser={currentUser} logout={logout} />
      <Routes>
        <Route path='/' element={<h1>Yerrrrr!!</h1>} />
        <Route path='/login' element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path='/signup' element={<Signup setCurrentUser={setCurrentUser} />} />
        <Route path='/Sneakers/*' element={<SneakersContainer currentUser={currentUser} />} />
      </Routes>
    </div>
  );
}

export default App;
