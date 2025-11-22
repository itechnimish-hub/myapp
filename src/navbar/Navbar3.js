import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";


export default function App() {
    return (
        <Router>
            <ul>

                <Link to="/home"><li >Home</li></Link>
                <Link to="/About" ><li >About Page</li></Link>

            </ul>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                {/* 404 Redirect */}
                <Route path="*" element={<Navigate to="/" />} />

            </Routes>
        </Router>
    );
}
