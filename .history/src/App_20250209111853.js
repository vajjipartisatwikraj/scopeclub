import React from 'react';
import Navbar from './components/Navbar';
import './App.css'
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="green-container">
      <div className="top-layer">
          <h1 className="head">We Are Team Scope</h1>
          </div>
        <div className="inner-container">
          <div className="grid-image-left"></div>
          <div className="circle-light"></div>
          <div className="grid-image-right"></div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
