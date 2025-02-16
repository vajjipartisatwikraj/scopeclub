import React from 'react';
import Navbar from './components/Navbar';
import './App.css'
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="green-container">
        <div className="top-layer">
          <div className="hw-container">
            <p className="hw-text">Hello, Worlds <span className="fontChange">!</span></p>
            <div className="hw-arrow"></div>
          </div>
          <h1 className="head">We Are Team <span className="highlighted">Scope</span>.</h1>
          <p className="caption">We transform coding passion into real-world projects, turning ideas into impactful experiences through collaboration, guidance, and hands-on learning.</p>
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
