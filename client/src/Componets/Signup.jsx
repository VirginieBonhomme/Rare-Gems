import { useState } from 'react'
import { signupUser } from '../Services/users'
import { useNavigate } from 'react-router-dom'

export default function Register(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  return (
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
      <input type='text' onChange={(e) => setUsername(e.target.value)} value={username} />
      <input type='text' onChange={(e) => setEmail(e.target.value)} value={email} />
      <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} />
      <button>Sign Up</button>
    </form>
  )
}
