
import { useState, useEffect } from "react";

function Useeffect() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log(count);
    });

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Click {count} times
            </button>
        </div>
    );
}
export default Useeffect;