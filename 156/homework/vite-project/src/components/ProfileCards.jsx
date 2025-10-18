import { useState } from 'react'
import users from './data'
export const ProfileCards = () => {
  const [render, setRender] = useState(1)

  return (
    <>
      {users.map((user, index) => (
        <div className=' border-2 p-3 m-2' key={index}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
          <button className=' cursor-pointer border-2 rounded-2xl p-2 w-20' onClick={() => { user.following = !user.following; setRender((prev) => prev + 1); }}>{user.following ? 'Unfollow' : 'Follow'}</button>
        </div>
      ))}
    </>
  )
}
