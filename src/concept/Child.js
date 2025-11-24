import { useState } from "react";

function Child({ sendDataToParent }) {
    const [data, setData] = useState("testing");

    // function handleClick() {
    sendDataToParent(data);
    // }

    return (
        <div>
            <h1>Child Component</h1>
        </div>
    );
}

export default Child;





































// <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
// <button onClick={handleClick}>Send Data to Parent</button>