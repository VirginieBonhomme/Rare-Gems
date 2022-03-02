import { useState } from 'react'
import { loginUser } from '../Services/users'
import { useNavigate } from 'react-router-dom'

export default function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  return (
    <div max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2>
      <form onSubmit={async (e) => {
        e.preventDefault()
        const user = {
          username,
          password
        }
        const resp = await loginUser(user)
        props.setCurrentUser(resp)

        navigate('/sneakers')

      }}>
        <input
          className="w-1/3 px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400"
          id="username"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username} />
        <br />
        <input
          class="w-1/3 px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400"
          id="password"
          type="password"
          placeholder="******************"
          onChange={(e) => setPassword(e.target.value)}
          value={password} />
        <br />
        <button
          className="bg-[#06b6d4] text-white font-bold py-2 px-4 rounded"
        >Login</button>
      </form>
    </div>
  )
}