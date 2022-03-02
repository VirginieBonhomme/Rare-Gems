import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
  }, [id, props.reviews, props.sneaker])


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
      <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Review Title</label>
      <br />
      <input
        className="w-full px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400"
        type='text'
        onChange={(e) => { setTitle(e.target.value) }}
        value={title}
      />
      <br />
      <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rate The Flip</label>
      <br />
      <input
        className="w-full px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400"
        type='number'
        onChange={(e) => { setWorth_it(e.target.valueAsNumber) }}
        value={worth_it}
      />
      <br />
      <label for="small-input" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-gray-300">Review</label>
      <br />
      <input
        className="w-full px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400"
        type='text'
        onChange={(e) => { setContent(e.target.value) }}
        value={content}
      />
      <br />
      <button className='mb-10'>Edit</button>
    </form>
  )
}