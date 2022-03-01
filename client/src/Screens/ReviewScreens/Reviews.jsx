import { Link } from "react-router-dom"
import ReviewEdit from "./ReviewEdit"
import React from 'react'
import OneReview from "./OneReview"

export default function Reviews(props) {
  console.log(props.create)
  return (
    <div class="max-w-lg mx-auto bg-white p-5 border-2 lg:text-left ">
      <div class="max-w-lg mx-auto bg-gray border-2 p-5 lg:text-left ">
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