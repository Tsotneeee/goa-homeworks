import React, { useState } from 'react';

export default function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(0);

    return (
    <>
        <p>here</p>
        <input type="number" value={num1} onChange={e => setNum1(e.target.value)} />
        <input type="number" value={num2} onChange={e => setNum2(e.target.value)} />
        <button onClick={() => setResult(Number(num1) + Number(num2))}>+</button>
        <button onClick={() => setResult(Number(num1) - Number(num2))}>-</button>
        <button onClick={() => setResult(Number(num1) * Number(num2))}>*</button>
        <button onClick={() => setResult(Number(num1) / Number(num2))}>/</button>
        <button onClick={() => { setResult(0); setNum1(''); setNum2(''); }}>reset</button>
        <h1>{String(result)}</h1>
    </>
    )
}