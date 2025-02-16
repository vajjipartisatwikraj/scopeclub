import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  useEffect(() => {
    setTimeout(() => {
      const coords = { x: 0, y: 0 };
      const circles = document.querySelectorAll(".circle");

      if (circles.length === 0) return; // Avoid accessing null elements

      circles.forEach((circle) => {
        circle.x = 0;
        circle.y = 0;
      });

      window.addEventListener("mousemove", (e) => {
        coords.x = e.clientX;
        coords.y = e.clientY;
      });

      function animateCircles() {
        let x = coords.x;
        let y = coords.y;

        circles.forEach((circle, index) => {
          if (!circle) return; // Extra safety check

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
    }, 100); // Delay execution to ensure elements exist
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
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
          </div>
        </div>
      </div>
      <div className="inside-scope">
        <div className="is-circle-light"></div>
        <div className="is-top-layer">
          <div className="is-contents">
            <h3 className='is-head'>Inside <span className="highlighted">Scope</span>.</h3>
            <p className='is-caption'>SCOPE Club, the technical club of MLRIT, fosters a strong coding culture through collaboration and events in AI, Open Source, Game Development, Web & App Development, and more. It connects students with experienced mentors, providing an official platform for guidance, networking, and growth beyond campus boundaries.</p>
          </div>
          <div className="is-image"></div>
        </div>
      </div>
      <div className="wdwd">
        <h2 className="wdwd-head">What do <span className="highlighted">we DO</span>?</h2>
        <div className="wdwe-01-container">
          <p className="wdwd-01-num">01 <span className="highlighted2">.</span></p>
          <div className="wdwd-01">
            <h3 className="wdwd-01-head">Hackathons</h3>
            <p className="wdwd-01-content">At SCOPE Club, we believe that hackathons are more than just coding competitions—they're a launchpad for innovation, collaboration, and real-world problem-solving. We regularly organize hackathons that bring together passionate developers, designers, and problem-solvers to build, innovate, and compete.</p>
          </div>
        </div>
        <div className="wdwe-02-container">
          <div className="wdwd-02">
            <h2 className="wdwd-02-head">Coding Contests</h2>
            <div className="wdwd-02-content"></div>
          </div>
          <p className="wdwd-02-num">02 <span className="highlighted2">.</span></p>
        </div>
        <div className="wdwe-03-container">
          <p className="wdwd-03-num">03 <span className="highlighted2">.</span></p>
          <div className="wdwd-03">
            <h3 className="wdwd-03-head">Projects</h3>
            <p className="wdwd-03-content">At SCOPE Club, we believe that coding is more than just solving problems—it’s about building real-world solutions. Through our project-based learning approach, we encourage students to collaborate, innovate, and develop projects that have a tangible impact.</p>
          </div>
        </div>
      </div>

      {/* Cursor effect elements */}
      {[...Array(20)].map((_, index) => (
        <div key={index} className="circle"></div>
      ))}
    </div>
  );
}

export default App;
