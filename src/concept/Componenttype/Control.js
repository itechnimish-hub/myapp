import React, { useState, useEffect } from 'react';

export default function Control() {
  const [data, setData] = useState("asfdf");

  // const updatedata = () => {
  //   console.log(data);
  // };
  useEffect(() => {
    console.log(data);
  }, []);

  return ( 
    <div>
      {/* {data} */}
      <input type="text" onChange={(e) => setData(e.target.value)} />
      {/* <button onClick={updatedata}>Click Me</button> */}
    </div>
  );
}