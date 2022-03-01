import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { updateReview } from '../../Services/reviews'

export default function ReviewEdit(props) {

  const [title, setTitle] = useState('')
  const [worth_it, setWorth_it] = useState(0)
  const [content, setContent] = useState('')
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate();

  const { id } = useParams()

  useEffect(() => {
    const foundReview = props.reviews.find(review => {
      return review.id === parseInt(id)
    })
    if (foundReview) {
      setTitle(foundReview.title)
      setWorth_it(foundReview.worth_it)
      setContent(foundReview.content)
    }
  }, [id, props.reviews])


  const handleEdit = async (id, formData) => {
    await updateReview(id, formData)
    setToggle(prevToggle => !prevToggle)
    navigate(`/sneakers/${id}`)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      const review = {
        title,
        worth_it,
        content
      }
      handleEdit(id, review)
    }}>
      <input
        type='text'
        onChange={handleEdit}
        value={title}
      />
      <input
        type='number'
        onChange={handleEdit}
        value={worth_it}
      />
      <input
        type='text'
        onChange={handleEdit}
        value={content}
      />
      <button>Edit</button>
    </form>
  )
}