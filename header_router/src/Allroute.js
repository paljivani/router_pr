import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contect from './Contect';
import Blog from './Blog';

function Allroute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contect' element={<Contect/>}/>
      </Routes>
    </div>
  )
}

export default Allroute;