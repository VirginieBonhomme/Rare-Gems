import { useState } from 'react'
import { handleReviewCreate } from '../SneakerDetails'

export default function ReviewCreate(props) {

  const [title, setTitle] = useState('')
  const [worth_it, setWorth_it] = useState(0)
  const [content, setContent] = useState('')

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        const review = {
          title,
          worth_it,
          content
        }
        props.handleReviewCreate(review)
      }}> <br />
        <label>Review Title</label>
        <br />
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label>Worth The Flip</label>
        <br />
        <input type='number' value={worth_it} onChange={(e) => setWorth_it(e.target.valueAsNumber)} />
        <br />
        <label>Review</label>
        <br />
        <input type='textarea' value={content} onChange={(e) => setContent(e.target.value)} />
        <br />
        <button>Drop a gem!</button>
      </form>
    </div>
  )
}
