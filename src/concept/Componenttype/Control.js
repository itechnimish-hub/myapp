import React, { useState } from 'react';

export default function Control() {
  const [data, setData] = useState("");

  const updatedata = () => {
    console.log(data);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setData(e.target.value)} />
      <button onClick={updatedata}>Click Me</button>
    </div>
  );
}