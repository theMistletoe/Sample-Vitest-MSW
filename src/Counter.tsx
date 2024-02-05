import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>count is {count}</p>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </>
    );
};

export default Counter;