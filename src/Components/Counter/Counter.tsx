import React, { useState } from 'react'
import './Counter.css';

export const Counter = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <> 
        <h1>{count}</h1>       
        <button className="primary" onClick={() => setCount(count + 1)}>+</button>
        <button className="success" onClick={() => setCount(count - 1)}>-</button>
        <button className="green" onClick={() => setCount(0)}>0</button>
        </>

    )
}

