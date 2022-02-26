import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getSneakerReviews, deleteReview } from '../Services/reviews'
import Reviews from './Reviews'
// import ReviewCreate from './ReviewCreate'

export default function SneakerDetail(props) {

  const [sneaker, setSneaker] = useState({})
  const [reviews, setReviews] = useState([])
  // const [toggle, setToggle] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const foundSneaker = props.snakers.find(sneaker => {
      return sneaker.id === parseInt(id)
    })
    const fetchReviews = async () => {
      const reviews = await getSneakerReviews(id)
      setReviews(reviews)
    }
    fetchReviews()
    setSneaker(foundSneaker)
  }, [id, props.sneakers, toggle])

  // const handleReviewCreate = async (formData) => {
  //   await createReview(id, formData)
  //   setToggle(prevToggle => !prevToggle)
  // }

  const handleReviewDelete = async (review_id) => {
    await deleteReview(id, review_id)
    setToggle(prevToggle => !prevToggle)
  }

  return (
    <div>
      {
        sneaker?.id ?
          <>
            <img src={sneaker.img_url} />
            <h2>{sneaker.name}</h2>
            <h3>${sneaker.how_rare}</h3>
            <h3>${sneaker.release_date}</h3>
            <h3>${sneaker.retail}</h3>
            <h3>${sneaker.resale}</h3>
            <p>{sneaker.description}</p>

            {
              props.currentUser?.id === sneaker.user_id ?
                <>
                  <Link to={`/sneakers/${sneaker.id}/edit`}>
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => props.handleDelete(sneaker.id)}>Delete</button>
                </>
                :
                null
            }
            {/* <ReviewCreate handleReviewCreate={handleReviewCreate} /> */}
            <Reviews
              currentUser={props.currentUser}
              reviews={reviews}
              handleReviewDelete={handleReviewDelete}
            />
          </>
          :
          <h3>Sorry, no product found.</h3>
      }
    </div>
  )
}
