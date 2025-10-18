import { useState, useEffect } from 'react'

export default function Mount() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [lastname, setUsername] = useState("")

    const fetcher = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        try {
            const data = await res.json();
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            setName(data.name);
            setEmail(data.email);
            setUsername(data.username);
            console.log(data);
        } catch  {
            alert("Error loading users");
        }
    }

    useEffect(() => {
        fetcher();
    }, []);

  return (
    <>
    <div>
        <h1>user info</h1>
        <p>name: {name}</p>
        <p>email: {email}</p>
        <p>username: {lastname}</p>
    </div>
    </>
  )
}

// API : "https://jsonplaceholder.typicode.com/users"