import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOneSneaker } from '../Services/sneakers'
import { getSneakerReviews, createReview, deleteReview, updateReview } from '../Services/reviews'
import Reviews from './ReviewScreens/Reviews'
import ReviewCreate from './ReviewScreens/ReviewCreate'



export default function SneakerDetail(props) {

  const [create, setCreate] = useState(true)
  const [sneaker, setSneaker] = useState({})
  const [reviews, setReviews] = useState([])
  const [toggle, setToggle] = useState(false)
  const { id } = useParams()


  useEffect(() => {

    // const foundSneaker = props.sneakers.find(sneaker => {
    //   return sneaker.id === parseInt(id)
    // })

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
  }, [id, props.sneakers, toggle])

  const handleReviewCreate = async (formData) => {
    await createReview(id, formData)
    setToggle(prevToggle => !prevToggle)
  }

  const handleReviewDelete = async (sneaker_id, review_id) => {
    await deleteReview(sneaker_id, review_id)
    setToggle(prevToggle => !prevToggle)
  }




  return (
    <div className=" lg:h-screen lg:items-center content-center">

      {
        sneaker?.id ?
          <>
            <div class="flex flex-wrap justify-center mt-20 p-10 items-center">
              <div>
                <h2>{sneaker.name}</h2>
                <img class="object-scale-down h-96 w-full" src={sneaker.img_url} alt="" />
                <h3>{sneaker.how_rare} Stars</h3>
              </div>
              <div>
                <div class="max-w-lg mx-auto text-center p-5 lg:text-left lg:py-24">
                  <div class="max-w-lg mx-auto bg-white p-5 lg:text-left ">
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
                </div>
              </div>
            </div>

            <Reviews
              currentUser={props.currentUser}
              reviews={reviews}
              handleReviewDelete={handleReviewDelete}
              sneaker={sneaker}
              setCreate={setCreate}
              create={create}
              setToggle={setToggle}
            />
            <ReviewCreate
              handleReviewCreate={handleReviewCreate}
              currentUser={props.currentUser}
              setCreate={setCreate}
              create={create}
            />
          </>
          :
          <h3>Sorry, no sneaker found.</h3>
      }

    </div>
  )
}

