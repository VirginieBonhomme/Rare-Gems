import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { updateReview } from '../../Services/reviews'
export default function ReviewEdit(props) {
  console.log(props)
  const [title, setTitle] = useState('')
  const [worth_it, setWorth_it] = useState(0)
  const [content, setContent] = useState('')



  const { id } = useParams()

  useEffect(() => {
    const foundReview = props.reviews.find(review => {
      return review.id === props.review.id
    })
    if (foundReview) {
      setTitle(foundReview.title)
      setWorth_it(foundReview.worth_it)
      setContent(foundReview.content)
    }
  }, [id, props.reviews])


  const handleEdit = async (sneaker_id, review_id, reviewData) => {
    await updateReview(sneaker_id, review_id, reviewData)
    props.setToggle(prevToggle => !prevToggle)
    props.updateSneakerDetail(prevToggle => !prevToggle)

  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      const review = {
        title,
        worth_it,
        content
      }
      handleEdit(id, props.review.id, review)
    }}>
      <input
        type='text'
        onChange={(e) => { setTitle(e.target.value) }}
        value={title}
      />
      <input
        type='number'
        onChange={(e) => { setWorth_it(e.target.valueAsNumber) }}
        value={worth_it}
      />
      <input
        type='text'
        onChange={(e) => { setContent(e.target.value) }}
        value={content}
      />
      <button>Edit</button>
    </form>
  )
}