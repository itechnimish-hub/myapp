import React, { useRef } from 'react';

export default function Uncontrol() {
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const handleSubmit = () => {
    let x = inputRef.current.value;
    inputRef1.current.value = x;
  };

  return (
    <div>

      <input type="text" ref={inputRef} />
      <input type="text" ref={inputRef1} value="" />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}