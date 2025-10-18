import {useState, useEffect} from 'react'

function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        console.log(username, password)
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)
        localStorage.setItem('logged', true)
    }, [username, password])

    const handleSubmit = (e) => {
        e.preventDefault()
        let formEl = e.currentTarget
        let formData = new FormData(formEl)
        setUsername(formData.get('username'))
        setPassword(formData.get('password'))
        console.log(username, password)
    }

  return (
    <>
        <h1>Register</h1><br></br>

        <form onSubmit={handleSubmit} action="">
          <input type="text" name='username' placeholder="Username" />
          <input type="password" name='password' placeholder="Password" />
          <button type='submit'>Register</button>
        </form>
    </>
  )
}

export default Register