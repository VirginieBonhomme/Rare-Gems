import React from 'react'
import { Link } from 'react-router-dom'

export default function Sneakers(props) {
  return (
    <div>
      {props.currentUser &&
        props.sneakers.map(sneaker => (
          <Link key={sneaker.id} to={`/sneakers/${sneaker.id}`}>
            <img src={sneaker.img_url} alt='' />
            <h4>{sneaker.name}</h4>
          </Link>
        ))
      }
    </div>
  )
}