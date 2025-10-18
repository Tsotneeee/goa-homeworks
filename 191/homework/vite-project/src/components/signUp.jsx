import {useState} from 'react'

function SignUp() {
    const [name, setName] = useState(localStorage.getItem('name') || '')
    const [password, setPassword] = useState(localStorage.getItem('password') || '')

    const handleSubmit = (e) => {
        e.preventDefault()
        setName(name)
        setPassword(password)
        localStorage.setItem('name', name)
        localStorage.setItem('password', password)
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className=' border border-blue-500'>Submit</button>
      </form>
    </>
  )
}

export default SignUp