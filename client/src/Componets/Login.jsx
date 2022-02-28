import { useState } from 'react'
import { loginUser } from '../Services/users'
import { useNavigate } from 'react-router-dom'

export default function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  return (
    <form class="bg-black shadow-md rounded px-8 pt-6 pb-8 mt-40 flex flex-col" onSubmit={async (e) => {
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
        class="shadow appearance-none border mt-5 rounded w-full py-2 px-3 text-grey-darker" id="username"
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username} />
      <input
        class="shadow appearance-none border border-red mt-5 rounded w-full py-2 px-3 text-grey-darker mb-3"
        id="password"
        type="password"
        placeholder="******************"
        onChange={(e) => setPassword(e.target.value)}
        value={password} />
      <button
        class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
      >Login</button>
    </form>
  )
}