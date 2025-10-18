import { useState, } from 'react'

const Register = (props) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = (e) => {
        e.preventDefault()
        let formEl = e.currentTarget;
        let formData = new FormData(formEl);
        setName(formData.get('name'))
        setPassword(formData.get('password'))
        localStorage.setItem('name', formData.get('name'))
        localStorage.setItem('password', formData.get('password'))
        props.setLoggedIn(true)
    }

  return (
    <>
        <h1>Register Page</h1>
        <form onSubmit={(e) => handleRegister(e)}>
            <input name='name' placeholder='Name'></input>
            <input name='password' placeholder='Password'></input>
            <button type='submit'>Register</button>
        </form>
    </>
  )
}

export default Register;