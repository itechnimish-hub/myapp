import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function StateUpdate() {
  const [count, setCount] = useState({ name: "John", age: 30 });

  const [course, setCourse] = useState("BCA");

  function update_data() {
    setCount({ name: "Shalan", age: 40 });
    setCourse("MCA");
  }
  
  return (
    <>
      <h1>Hooks Example {count.name}, {count.age} {course}</h1>
      <button onClick={update_data}>Increment</button>
      <Button variant="primary">Primary</Button>
      <Alert variant="success">
        Success! You have updated the state.
      </Alert>
    </>
  );
}

export default StateUpdate;