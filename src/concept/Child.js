import { useState } from "react";

function Child({ setDataFromChild }) {
    const [data, setData] = useState("testing");


    setDataFromChild(data);


    return (
        <div>
            <h1>Child Component</h1>
            {/* <h1>{abc}</h1> */}
        </div>
    );
}

export default Child;





































// <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
// <button onClick={handleClick}>Send Data to Parent</button>