import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import List from "../crud/List";
import Insert from "../crud/Insert";
import Update from "../crud/Update";

function Navbar() {

  return (
    <>

      <Router>
        <ul>
          <Link to="/"><li >List Blog</li></Link>
          <Link to="/add" ><li>Add Blog</li></Link>
        </ul>
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/add" element={<Insert />} ></Route>
          <Route path="/update/:id" element={<Update />} ></Route>
          <Route path="*" element={<page />} ></Route>
        </Routes>
      </Router>

    </>
  );
}

export default Navbar;
