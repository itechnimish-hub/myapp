import React, { useState, useCallback } from "react";
import Child from "./Child";

function Usecallback() {

    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {

        console.log("Callback function called");

    }, []); // only created once

    return (
        < div>
            <h1> Count: {count} </h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Child abc={handleClick} />
        </ div>
    );
}

export default Usecallback;