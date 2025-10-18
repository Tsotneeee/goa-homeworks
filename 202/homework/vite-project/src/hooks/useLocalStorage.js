import { useEffect, useState } from 'react'

function useLocalStorage(input) {
    const [data, setData] = useState(() => {
        const storedValue = localStorage.getItem(input)
        return storedValue ? JSON.parse(storedValue) : null
    })

    useEffect(() => {
        if (data !== null) {
            localStorage.setItem(input, JSON.stringify(data))
        }
    }, [data, input])

    return [data, setData]
}

export default useLocalStorage