import React from "react";
import { BrowserRouter, Routes, Route,Link  } from "react-router-dom";
import Home from "./Home";
import About from './About';
import Contact from './Contact';
function QueryParam(){
    return(
        <div>
            <BrowserRouter>
            <div><Link to="/home?name=John">Home</Link></div>
            <div><Link to="/about?topic=React">About</Link></div>
            <div><Link to="/contact?method=email">Contact</Link></div>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}
export default QueryParam;