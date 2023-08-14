import React from 'react'
import countState from '../recoil/atoms/countState'
import { useRecoilState } from 'recoil'

const Counter = () => {
    const [count, setCount] = useRecoilState(countState)
    const increase = () => {
        setCount(count + 1)
    }
    return (
        <>
            <h1>I am {count}</h1>
            <button onClick={increase}>increase</button>
        </>
    )
}

export default Counter
