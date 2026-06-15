import React, { useState } from "react";
import List from "./List";

function Memo() {
  const [count, setCount] = useState(100);

  function update_data() {
    setCount(count + 1);
  }

  return (
    <>
      <List abc={count} />

      <h1>Hooks Example {count}</h1>
      <button onClick={update_data}>Increment</button>
    </>
  );
}

export default Memo;