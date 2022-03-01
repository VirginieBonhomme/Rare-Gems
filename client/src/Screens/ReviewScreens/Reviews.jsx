
import ReviewEdit from "./ReviewEdit"
import React from 'react'
import OneReview from "./OneReview"

export default function Reviews(props) {
  console.log(props.create)
  return (


    <div className="max-w-lg mx-auto flex flex-col items-center bg-[#dadfe5] p-5  lg:text-left rounded-lg ">
      <h2>Drop A Gem</h2>
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

  )
}