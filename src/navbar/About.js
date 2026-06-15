import React, { useState } from "react";
import { useParams } from 'react-router-dom';
function About() {

  let { id } = useParams();


  return (
    <>
      <h1>About Us Component</h1>
      <h1>User Id is : {id}    </h1>
    </>
  );
}

export default About;

