import React from "react";

function Child({ abc }) {

  console.log("Child Rendered");

  return (
    <div>

      <h2>Child Component</h2>

      <button onClick={abc}>

        Call Parent Callback

      </button>

    </div>
  );
}

export default React.memo(Child);