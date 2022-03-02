
import React from 'react'
import OneReview from "./OneReview"

export default function Reviews(props) {
  console.log(props.create)
  return (
    <div className='mt-10'>
      <h2 className="font-normal text-black text-4xl mb-5 hover:font-bold" >Reviews</h2>
      <div className="max-w-lg mx-auto flex flex-col  opacity-50 overflow-y-auto h-72 items-center bg-[#dadfe5] p-5  lg:text-left rounded-lg ">
        <div className="max-w-lg mx-auto bg-gray  p-5 lg:text-left ">
          {props.reviews &&
            props.reviews.map(review => (
              <OneReview
                review={review}
                reviews={props.reviews}
                currentUser={props.currentUser}
                updateSneakerDetail={props.setToggle}
                handleReviewDelete={props.handleReviewDelete}
              />

            ))
          }
        </div>
      </div>
    </div>

  )
}