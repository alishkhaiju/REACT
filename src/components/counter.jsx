import {useState} from "react";

const ChildA = ({count, onIncrement}) => {
    
    return (
        <>
            <h1>Child A</h1>
            <p>Count : {count}</p>
            <button onClick={onIncrement}>Increment</button>
        </>
    )
}

const ChildB = ({count, onDecrement}) => {
   
    return (
        <>
            <h1>Child B</h1>
            <p>Count : {count} </p>
            <button onClick={onDecrement}>Decrement</button>
        </>
    )
}

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
        <h1>Counter</h1>
            <ChildA count ={count} onIncrement ={ ()=> setCount(count + 1)}/>
            <ChildB count={count} onDecrement ={ ()=> setCount(count - 1)}/>
        </>
    )
}

export default Counter
