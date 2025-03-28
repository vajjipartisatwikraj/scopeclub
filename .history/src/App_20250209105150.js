import React from 'react';
import Navbar from './components/Navbar';
import './App.css'
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="green-container">
        <div className="inner-container">
          <div className="grid-image-left"></div>
          <div className="grid-image-right"></div>
          <div className="circle-light"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
