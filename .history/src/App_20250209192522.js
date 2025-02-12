import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const circlesRef = useRef([]);
  const coords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const colors = ["#ffffff"];

    circlesRef.current.forEach((circle, index) => {
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      coords.current = { x: e.clientX, y: e.clientY };
    };

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circlesRef.current.forEach((circle, index) => {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.transform = `scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;

        const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="green-container">
        <div className="top-layer">
          <div className="hw-container">
            <p className="hw-text">Hello, World<span className="fontChange">!</span></p>
            <div className="hw-arrow"></div>
          </div>
          <h1 className="head">We Are Team <span className="highlighted">Scope</span>.</h1>
          <p className="caption">We transform coding passion into real-world projects, turning ideas into impactful experiences through collaboration, guidance, and hands-on learning.</p>
        </div>
        <div className="inner-container">
          <div className="grid-image-left"></div>
          <div className="circle-light"></div>
          <div className="grid-image-right"></div>
          <div className="circles">
            {[...Array(20)].map((_, index) => (
              <div key={index} className="circle" ref={el => circlesRef.current[index] = el}></div>
            ))}
          </div>
        </div>
      </div>
      <div className="inside-scope">
        <div className="is-circle-light"></div>
        <div className="is-top-layer">
          <div className="is-contents">
            <h2 className='is-head'>Inside <span className="highlighted">Scope</span>.</h2>
            <p className='is-caption'>SCOPE Club, the technical club of MLRIT, fosters a strong coding culture through collaboration and events in AI, Open Source, Game Development, Web & App Development, and more. It connects students with experienced mentors, providing an official platform for guidance, networking, and growth beyond campus boundaries.</p>
          </div>
          <div className="is-image"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
