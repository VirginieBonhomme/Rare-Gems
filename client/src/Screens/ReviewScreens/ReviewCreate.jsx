import { useState } from 'react'


export default function ReviewCreate(props) {

  const [title, setTitle] = useState('')
  const [worth_it, setWorth_it] = useState()
  const [content, setContent] = useState('')

  return (
    <div >

      <form
        className='m-20'
        onSubmit={(e) => {
          e.preventDefault()
          const review = {
            title,
            worth_it,
            content
          }
          props.handleReviewCreate(review)
        }}> <br />
        <h2 className="font-normal text-black text-4xl hover:font-bold">Leave A Review</h2>
        <br />
        <label>Review Title</label>
        <br />
        <input
          className="w-1/3 px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400"
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label>Rate The Flip</label>
        <br />
        <input
          className="w-1/3 px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400"
          type='number'
          value={worth_it}
          onChange={(e) => setWorth_it(e.target.valueAsNumber)}
          min="1"
          max="5"
        />
        <br />
        <label>Review</label>
        <br />
        <input
          className="w-1/3 px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400"
          type='textarea'
          value={content}
          onChange={(e) => setContent(e.target.value)} />
        <br />
        <button className='text-sm bg-[#06b6d4] mb-21 mt-20 text-white font-bold py-2 px-4 rounded'>Drop a gem!</button>
        <br />
      </form>
    </div>
  )
}
