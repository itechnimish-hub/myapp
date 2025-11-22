import React, { useState } from "react";
import { useParams } from 'react-router-dom';


function Home() {

  let { email } = useParams();
  return (

    <div>
      <h1>{email}Home Component</h1>
    </div>

  );
}

export default Home;
