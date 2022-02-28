import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getAllSneakers } from '../Services/sneakers.js'
import Sneakers from '../Screens/Sneakers.jsx'


export default function HomeScreen(props) {

  const [sneakers, setSneakers] = useState([])

  useEffect(() => {
    const fetchSneakers = async () => {
      const sneakers = await getAllSneakers()
      setSneakers(sneakers)
    }
    fetchSneakers()
  }, [])


  return (
    <div>
      <Routes>
        <Route path='/' element={
          <Sneakers />
        } />
      </Routes>
    </div>
  )
}