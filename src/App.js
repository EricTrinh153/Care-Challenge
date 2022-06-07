import React from 'react';
import { HomePage,Navbar } from './components';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import CryptosDetails from './components/CryptosDetails';
const App = () => {
  

  return (
    <div>
      <div className='navbar'>
        < Navbar/>
      </div>
      <div className='main'>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/crypto/:coinId" element={<CryptosDetails/>}/>
        </Routes>
        
      </div>
    </div>
  )
}

export default App;