import { useState } from 'react'
import { signupUser } from '../Services/users'
import { useNavigate } from 'react-router-dom'

export default function Register(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  return (
    <div className=' container max-w-full mx-auto flex-1 flex flex-col items-center justify-center px-2'>
      <form onSubmit={async (e) => {
        e.preventDefault()
        const user = {
          username,
          email,
          password
        }
        const resp = await signupUser(user)
        props.setCurrentUser(resp)

        navigate('/sneakers')

      }}>
        <input
          placeholder='Username'
          className="w-full px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400"
          type='text'
          onChange={(e) => setUsername(e.target.value)} value={username} />
        <br />
        <input
          placeholder='Email'
          className="w-full px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400"
          type='text'
          onChange={(e) => setEmail(e.target.value)} value={email} />
        <br />
        <input
          placeholder='Password'
          className="w-full px-4 py-2 border-b-2 text-black border-gray-400 outline-none  focus:border-gray-400"
          type='password'
          onChange={(e) => setPassword(e.target.value)} value={password} />
        <br />
        <button className="bg-[#06b6d4] text-white font-bold py-2 px-4 rounded">Sign Up</button>
        <br />
      </form>
    </div>
  )
}
