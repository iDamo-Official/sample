import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Blog from '../../pages/Blog'
import Support from '../../pages/Support'

const Navpage = () => {
  return (
    <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/support" element={<Support />}/>
        </Routes>
    </React.Fragment>
  )
}

export default Navpage