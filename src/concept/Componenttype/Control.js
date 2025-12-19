import React, { useState } from 'react';

export default function Control() {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p> {data} </p>
    </div>
  );
}