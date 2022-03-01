import React from 'react'
import ReviewEdit from './ReviewEdit'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

function OneReview(props) {

  const { review } = props
  const { id } = useParams()
  const [toggle, setToggle] = useState(false)
  return (

    <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg my-6 px-6 py-4" key={review.id}>
      <h3>{review.title}</h3>
      <h4>Username: {review.user.username}</h4>
      <h5>{review.worth_it} stars</h5>
      <p>{review.content}</p>

      {
        props.currentUser?.id === review.user_id ?
          <>

            <button onClick={() => setToggle(prev => !prev)}>Edit Review</button>
            {toggle ? <ReviewEdit reviews={props.reviews} review={review} setToggle={setToggle} updateSneakerDetail={props.updateSneakerDetail} handleReviewDelete={props.handleReviewDelete} /> : null}
            <button onClick={() => props.handleReviewDelete(id, review.id)}>Delete Review</button>
          </>
          :
          null
      }
    </div>

  )
}

export default OneReview