import React, { useRef } from 'react';

export default function Uncontrol() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
  
    alert('Input value: ' + inputRef.current.value);

  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"  ref={inputRef} />
      
      <button type="submit">Submit</button>
    </form>
  );
}