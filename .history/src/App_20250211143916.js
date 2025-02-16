import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function App() {



  return (
    <Home></Home>
  );
}

export default App;
