import { Link } from "react-router-dom"

import React from 'react'

export default function Reviews(props) {
  return (
    <div class="max-w-lg mx-auto bg-white p-5 border-2 lg:text-left ">
      <div class="max-w-lg mx-auto bg-gray border-2 p-5 lg:text-left ">
        {props.reviews &&
          props.reviews.map(review => (
            <div key={review.id}>
              <h3>{review.title}</h3>
              <h4>Username: {review.user.username}</h4>
              <h5>{review.worth_it} stars</h5>
              <p>{review.content}</p>

              {
                props.currentUser?.id === review.user_id ?
                  <>
                    <Link to={`/sneakers/${props.sneaker?.id}/edit`}>
                      <button>Edit Review</button>
                    </Link>
                    <button onClick={() => props.handleReviewDelete(props.sneaker?.id, review.id)}>Delete Review</button>
                  </>
                  :
                  null
              }
            </div>

          ))
        }
      </div>
    </div>
  )
}