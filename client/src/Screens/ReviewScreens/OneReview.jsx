import React from 'react'
import ReviewEdit from './ReviewEdit'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

function OneReview(props) {

  const { review } = props
  const { id } = useParams()
  const [toggle, setToggle] = useState(false)
  return (

    <div className=" bg-white roundedoverflow-hidden shadow-xl my-6 px-6 py-4" key={review.id}>
      <h4 className='text-2xl'>{review.user.username}</h4>
      <h3>{review.title}</h3>
      <h5>{review.worth_it} stars</h5>
      <p>{review.content}</p>

      {
        props.currentUser?.id === review.user_id ?
          <>
            <div className='p-5 space-x-4'>
              <button className='text-sm bg-[#06b6d4] text-white font-bold py-2 px-4 rounded' onClick={() => setToggle(prev => !prev)}>Edit</button>
              {toggle ? <ReviewEdit reviews={props.reviews} review={review} setToggle={setToggle} updateSneakerDetail={props.updateSneakerDetail} handleReviewDelete={props.handleReviewDelete} /> : null}
              <button className='text-sm bg-[#06b6d4] text-white font-bold py-2 px-4 rounded' onClick={() => props.handleReviewDelete(id, review.id)}>Delete</button>
            </div>
          </>
          :
          null
      }
    </div>

  )
}

export default OneReview