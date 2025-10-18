import { Link } from 'react-router-dom'

const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
]

function Home() {
  return (
    <div>
      {users.length === 0 ? (
        <h1>No users found</h1>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} — <Link to={`/users/${user.id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Home