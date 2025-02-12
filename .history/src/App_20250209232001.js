import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const headingsRef = useRef([]);
  useEffect(() => {
    headingsRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const coords = { x: 0, y: 0 };
      const circles = document.querySelectorAll('.circle');
      if (circles.length === 0) return;

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
          x += ((circles[index + 1] || circles[0]).x - x) * 0.3;
          y += ((circles[index + 1] || circles[0]).y - y) * 0.3;
        });

        requestAnimationFrame(animateCircles);
      }

      animateCircles();
    }, 100);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="green-container">
        <div className="top-layer">
          <h1 className="head">We Are Team <span className="highlighted">Scope</span>.</h1>
          <p className="caption">We transform coding passion into real-world projects...</p>
        </div>
      </div>
      <div className="inside-scope">
        <h2 ref={(el) => (headingsRef.current[0] = el)} className='is-head'>Inside <span className="highlighted">Scope</span>.</h2>
      </div>
      <div className="wdwd">
        <h2 ref={(el) => (headingsRef.current[1] = el)} className="wdwd-head">What do <span className="highlighted">we DO</span>?</h2>
      </div>
      <div className="brand-events">
        <h2 ref={(el) => (headingsRef.current[2] = el)} className="brand-events-head">Our <span className="highlighted">events</span> define our <span className="highlighted">brand</span>.</h2>
      </div>
      {[...Array(20)].map((_, index) => (
        <div key={index} className="circle"></div>
      ))}
    </div>
  );
}

export default App;
