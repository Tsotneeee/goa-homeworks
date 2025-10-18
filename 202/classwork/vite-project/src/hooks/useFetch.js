// url არგუმენტად და დაგვიბრუნდეს loading , error და data

import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error , setError] = useState(null)

    useEffect(()=>{
        const controller = new AbortController()
        const signal = controller.signal

        async function fetcher() {
            try{
                setLoading(true)
                const fetchedData = await fetch(url, {signal})
                if ( !fetchedData.ok ) {
                    throw new Error("response is not ok")
                }
                const dataJson = await fetchedData.json()
                setData(dataJson)
                
            }catch(err){
                setError(err)
            }finally{
                setLoading(false)
            }
        }
        fetcher()

        return () => controller.abort()
    },[url])

    return [data,loading,error]
}