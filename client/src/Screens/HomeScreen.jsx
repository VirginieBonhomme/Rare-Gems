import { Routes, Route } from 'react-router-dom'
import Sneakers from '../Screens/Sneakers.jsx'


export default function HomeScreen(props) {

  return (
    <div class="grid grid-cols-3 gap-10 my-10">
      <Routes>
        <Route path='/' element={
          <Sneakers />
        } />
      </Routes>
    </div>
  )
}