import React from 'react';
import useCounter from '../../hooks/useCounter';

import './counter.css';

const CounterWithCustomHook = () => {

    const {counter, increment, reset, decrement} = useCounter(100);

    return (
        <>
            <h1>Counter With Hook: { counter }</h1>
            <hr />
            <button onClick={ () => increment() } className="btn btn-primary">+1</button>   
            <button onClick={ reset } className="btn btn-primary">Reset</button>   
            <button onClick={ () => decrement() } className="btn btn-primary">-1</button>   
        </>
    )
}

export default CounterWithCustomHook
