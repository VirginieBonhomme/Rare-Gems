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
      <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Review Title</label>
      <br />
      <input className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type='text'
        onChange={(e) => { setTitle(e.target.value) }}
        value={title}
      />
      <br />
      <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Worth The Flip?</label>
      <br />
      <input className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type='number'
        onChange={(e) => { setWorth_it(e.target.valueAsNumber) }}
        value={worth_it}
      />
      <br />
      <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Review</label>
      <br />
      <input className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type='text'
        onChange={(e) => { setContent(e.target.value) }}
        value={content}
      />
      <button>Edit</button>
    </form>
  )
}