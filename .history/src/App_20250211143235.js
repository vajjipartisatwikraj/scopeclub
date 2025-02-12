import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { gsap } from 'gsap';
import Home from './components/Home'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function App() {

  

  return (
    <div>
      <Navbar />
      <Home></Home>
      
    </div>
  );
}

export default App;
