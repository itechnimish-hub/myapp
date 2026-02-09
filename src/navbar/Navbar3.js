import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

import { Suspense, lazy } from 'react'
import Lazy2 from './lazy/Lazy2'

const Lazy1 = lazy(() => import('./lazy/Lazy1'))

export default function App() {
    return (<div>
        {/* <Router>
             <ul>

                 <Link to="/"><li >Home</li></Link>
                <Link to="/about" ><li >About Page</li></Link>

            </ul>
             <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                <Route path="/about/:id" element={<About />} /> */}

        {/* 404 Redirect */}
        {/* <Route path="*" element={<Navbar />} /> */}
        {/* 
            </Routes>
         </Router> */}

        <Lazy2 />
        <Suspense fallback={<div>Please Wait.....</div>}>

            <Lazy1 />
        </Suspense>
    </div>
    );
}


