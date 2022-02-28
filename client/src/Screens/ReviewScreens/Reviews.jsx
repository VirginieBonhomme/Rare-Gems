

import React from 'react'

export default function Reviews(props) {
  return (
    <div>
      {props.reviews &&
        props.reviews.map(review => (
          <div key={review.id}>
            <h3>{review.title}</h3>
            <h4>Author: {review.user.username}</h4>
            <h5>{review.worth_it} stars</h5>
            <p>{review.content}</p>

            {
              props.currentUser?.id === review.user_id ?
                <>
                  <button>Edit</button>
                  <button>
                    Delete
                  </button>
                </>
                :
                null
            }
          </div>
        ))
      }
    </div>
  )
}