import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneSneaker } from '../Services/sneakers'
import { getSneakerReviews, createReview, } from '../Services/reviews'
import Reviews from './ReviewScreens/Reviews'
import ReviewCreate from './ReviewScreens/ReviewCreate'


export default function SneakerDetail(props) {


  const [sneaker, setSneaker] = useState({})
  const [reviews, setReviews] = useState([])
  const [toggle, setToggle] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchSneaker = async () => {
      const sneaker = await getOneSneaker(id)
      setSneaker(sneaker)
    }
    fetchSneaker()

    const fetchReviews = async () => {
      const reviews = await getSneakerReviews(id)
      setReviews(reviews)
    }
    fetchReviews()
    setSneaker()
  }, [id, props.sneakers])

  const handleReviewCreate = async (formData) => {
    await createReview(id, formData)
    setToggle(prevToggle => !prevToggle)
  }


  return (
    <div className=" lg:h-screen lg:items-center">

      {
        sneaker?.id ?
          <>
            <div>
              <img class="object-scale-down h-96 w-full" src={sneaker.img_url} alt="" />
            </div>
            <div class="max-w-lg mx-auto text-center p-5 lg:text-left lg:py-24">
              <h2>{sneaker.name}</h2>
              <br />
              <h3>How Rare: {sneaker.how_rare} Stars</h3>
              <br />
              <h3>Orignal Release Date: {sneaker.release_date}</h3>
              <br />
              <h3>Retail: {sneaker.retail}</h3>
              <br />
              <h3>Resale: {sneaker.resale}</h3>
              <br />
              <p>History: {sneaker.description}</p>
            </div>
          </>
          :
          <h3>Sorry, no product found.</h3>
      }
      <Reviews
        currentUser={props.currentUser}
        reviews={reviews}
      />
      <ReviewCreate handleReviewCreate={handleReviewCreate} />

    </div>
  )
}

