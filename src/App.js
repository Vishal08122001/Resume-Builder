import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import CheckSelectedId from './Components/CheckSelectedId';
import Fill_Details from "./Pages/Fill_Details"
import About from "./Pages/About"
import MyResume from "./Pages/MyResumes"





function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route exact path="/" element={<Home />} />


        {/* Fill-Details Page */}
        <Route exact path="/template/fill_details"
          element={
            <CheckSelectedId>
              <Fill_Details />
            </CheckSelectedId>
          } />


        {/* About Page */}
        <Route exact path="/about" element={<About />} />
        {/* My Resume Page */}
        <Route exact path="/MyResume" element={<MyResume />} />

      </Routes>
    </Router>

  )
}

export default App

