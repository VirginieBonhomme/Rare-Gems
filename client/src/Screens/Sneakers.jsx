import React from 'react'
import { Link } from 'react-router-dom'

export default function Sneakers(props) {
  return (
    <div >
      {
        props.sneakers.map(sneaker => (
          <div class="w-60 p-2 m-4 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <Link
              key={sneaker.id} to={`/sneakers/${sneaker.id}`}>
              <h4 class="text-lg m-4" >{sneaker.name}</h4>
              <img src={sneaker.img_url} alt='' />
              <div class="text-white bg-black m-4 px-3 py-1 rounded-md">
                <h4>Stars {sneaker.how_rare}</h4>
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  )
}