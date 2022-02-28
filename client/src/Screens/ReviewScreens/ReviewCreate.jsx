import { useState } from 'react'

export default function ReviewCreate(props) {

  const [title, setTitle] = useState('')
  const [worth_it, setWorth_it] = useState(0)
  const [content, setContent] = useState('')

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      const review = {
        title,
        worth_it,
        content
      }
      props.handleReviewCreate(review)
    }}>
      <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type='number' value={worth_it} onChange={(e) => setWorth_it(e.target.valueAsNumber)} />
      <input type='textarea' value={content} onChange={(e) => setContent(e.target.value)} />
      <button>Drop a gem!</button>
    </form>
  )
}
