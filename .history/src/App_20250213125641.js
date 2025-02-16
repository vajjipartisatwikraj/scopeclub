import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Teams from './components/Team/Team'; 
import Events from './components/Events/Events';
import Resources from './components/Resources';
import './App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect} from 'react';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs/ContactUs';

gsap.registerPlugin(ScrollTrigger);

function App() {
  

  useEffect(() => {
    setTimeout(() => {
      const coords = { x: 0, y: 0 };
      const circles = document.querySelectorAll('.circle');
      if (circles.length === 0) return;

      circles.forEach((circle) => {
        circle.x = 0;
        circle.y = 0;
      });

      window.addEventListener('mousemove', (e) => {
        coords.x = e.clientX;
        coords.y = e.clientY;
      });

      function animateCircles() {
        let x = coords.x;
        let y = coords.y;

        circles.forEach((circle, index) => {
          if (!circle) return;

          circle.style.left = `${x - 12}px`;
          circle.style.top = `${y - 12}px`;
          circle.style.scale = (circles.length - index) / circles.length;
          circle.x = x;
          circle.y = y;

          const nextCircle = circles[index + 1] || circles[0];
          x += (nextCircle.x - x) * 0.3;
          y += (nextCircle.y - y) * 0.3;
        });

        requestAnimationFrame(animateCircles);
      }

      animateCircles();
    }, 100);
  }, []);

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </Router>
    {/* Cursor effect elements */}
    {[...Array(20)].map((_, index) => (
      <div key={index} className="circle"></div>
    ))}</>
  );
}

export default App;
