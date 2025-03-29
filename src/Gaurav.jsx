import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from './component/About';

function Gaurav() {
  return (
    <>
  <BrowserRouter>
     <div className='text-3xl'>
        <Link to= "/About">Home</Link>
     </div>
    </BrowserRouter>

    </>
 




  )
}

export default Gaurav