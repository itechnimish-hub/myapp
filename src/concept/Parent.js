import { useState } from "react";
import Child from "./Child";

function Parent() {
    const [dataFromChild, setDataFromChild] = useState("");

    function handleDataFromChild(data) {
        setDataFromChild(data);
    }

    return (
        <div>
            <h1>Data from Child: {dataFromChild}</h1>
            <Child setDataFromChild={handleDataFromChild} abc="hi" />
        </div>
    );
}

export default Parent;