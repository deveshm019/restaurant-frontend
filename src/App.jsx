import React from 'react';
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Home from "./pages/Home.jsx"
import Success from "./pages/Success.jsx"
import NotFound from "./pages/NotFound.jsx"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/success' element={<Success/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App