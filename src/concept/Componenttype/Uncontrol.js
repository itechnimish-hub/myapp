import React, { useRef } from 'react';

export default function Uncontrol() {
  const inputRef = useRef(null);


  const handleSubmit = () => {
    let x = inputRef.current.type;
    inputRef.current.value = "abc";
    console.log(x);
  };

  return (
    <div>

      <input type="text" ref={inputRef} value="tetsing" />

      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}