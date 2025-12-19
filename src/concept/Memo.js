import React, { useState, memo } from "react";

function Memo() {
  const [count, setCount] = useState(100);

  function update_data() {
    setCount(200);
  }

  return (
    <>
      <h1>Hooks Example {count}</h1>
      <button onClick={update_data}>Increment</button>
    </>
  );
}

export default memo(Pure_ex_fun);