import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { verifyUser } from './Services/users.js';
import SneakersContainer from './Containers/SneakerContainer.jsx';
import Navbar from './Componets/Navbar';
import Login from './Componets/Login';
import Signup from './Componets/Signup';
import HomeScreen from './Screens/HomeScreen';
import SneakerDetail from './Screens/SneakerDetails';
import ReviewEdit from './Screens/ReviewScreens/ReviewEdit'
import Footer from './Componets/Footer';
// import HomeScreen from './Screens/HomeScreen';


function App() {

  const [currentUser, setCurrentUser] = useState(null)
  // const [sneakers, setSneakers] = useState([])

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
        <Route path='/' element={<Navigate replace to='/Sneakers' />} />
        <Route path='/login' element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path='/signup' element={<Signup setCurrentUser={setCurrentUser} />} />
        <Route path='/Sneakers/*' element={<SneakersContainer currentUser={currentUser} />} />
        <Route path="/Sneakers/:id" element={<SneakerDetail currentUser={currentUser} />} />
        <Route path="/Sneakers/:id/edit" element={<ReviewEdit currentUser={currentUser} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
