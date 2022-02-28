import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Sneakers from '../Sneakers'

export default function ReviewEdit(props) {

  const [title, setTitle] = useState('')
  const [worth_it, setWorth_It] = useState(0)
  const [content, setContent] = useState('')


  const { id } = useParams()

  useEffect(() => {
    const foundReviews = props.reviews.find(review => {
      return review.id === parseInt(id)
    })
    if (foundReviews) {
      setTitle(foundReviews.title)
      setWorth_It(foundReviews.worth_it)
      setContent(foundReviews.content)
    }
  }, [id, props.reviews])

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        const reviews = {
          title,
          worth_it,
          content
        }
        props.handleEdit(id, reviews)
      }}>
        <input
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type='number'
          onChange={(e) => setWorth_It(e.target.valueAsNumber)}
          value={worth_it}
        />
        <input
          type='text'
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button>Edit</button>
      </form>
    </div>
  )
}
