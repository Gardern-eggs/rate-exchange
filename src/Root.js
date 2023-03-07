import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Rate from './Rate';
import Signup from './Signup';
import React from 'react'
import App from './App';
// import Search from './Search';
import Reset from './Reset';
import ResetPass from './ResetPass';

function Roots() {
  return (
    <>
      <BrowserRouter>
         <Routes>
         <Route path='/' element={<Rate />}/>
          <Route path='Signup' element={<Signup />}/>
          <Route path='App' element={<App />}/>
          {/* <Route path='Search' element={<Search />}/>          */}
          <Route path='Reset' element={<Reset />}/>
          <Route path='ResetPass' element={<ResetPass />}/> 

           
         </Routes>
      </BrowserRouter>
    </>
    // 
  )
}

export default Roots