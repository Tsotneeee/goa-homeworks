import {useEffect, useState} from 'react'

export const StopWatch = (props) => {
    const [count, setCount] = useState(0);
    

    useEffect(()=> {
        let timer1 = setInterval(() => setCount(prev => prev + 1), 1000);
        return ()=> clearInterval(timer1);
    },[props.con]);
    console.log(props.con);
    return (
    <>
        <p>{count}</p>
        
    </>
    )
}
