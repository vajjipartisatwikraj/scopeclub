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
            <h2 className='is-head'>Inside <span className="highlighted">Scope</span>.</h2>
            <p className='is-caption'>SCOPE Club, the technical club of MLRIT, fosters a strong coding culture through collaboration and events in AI, Open Source, Game Development, Web & App Development, and more. It connects students with experienced mentors, providing an official platform for guidance, networking, and growth beyond campus boundaries.</p>
          </div>
          <div className="is-image"></div>
        </div>
      </div>
      <div className="wdwd">
        <h2 className="wdwd-head">What do <span className="highlighted">we DO</span>?</h2>
        <div className="wdwd-main-container">
        <div className="wdwe-01-container">
          <p className="wdwd-01-num">01.</p>
          <div className="wdwd-01">
            <h3 className="wdwd-01-head">Hackathons</h3>
            <p className="wdwd-01-content">At SCOPE Club, we believe that hackathons are more than just coding competitions—they're a launchpad for innovation, collaboration, and real-world problem-solving. We regularly organize hackathons that bring together passionate developers, designers, and problem-solvers to build, innovate, and compete.</p>
          </div>
        </div>
        <div className="wdwe-02-container">
          <div className="wdwd-02">
            <h3 className="wdwd-02-head">Coding Contests</h3>
            <p className="wdwd-02-content">At SCOPE Club, we foster a strong competitive coding culture by organizing exciting coding contests that challenge participants to think logically, optimize solutions, and push their limits. Whether you're a beginner or an experienced coder, our contests provide the perfect platform to sharpen your problem-solving skills, learn new algorithms, and compete with the best minds.</p>
          </div>
          <p className="wdwd-02-num">02.</p>
        </div>
        <div className="wdwe-03-container">
          <p className="wdwd-03-num">03.</p>
          <div className="wdwd-03">
            <h3 className="wdwd-03-head">Projects</h3>
            <p className="wdwd-03-content">At SCOPE Club, we believe that coding is more than just solving problems—it’s about building real-world solutions. Through our project-based learning approach, we encourage students to collaborate, innovate, and develop projects that have a tangible impact.</p>
          </div>
        </div>
        </div>
      </div>
      <div className="brand-events">
        <div className="brand-events-head">Our events define our brand.</div>
        <div className="brand-events-caption">SCOPE Club events drive innovation through hackathons, coding contests, and tech workshops. We foster hands-on learning, mentorship, and collaboration. From problem-solving to real-world impact, our events shape a thriving tech community.</div>
        <div className="brand-events-images">
          <div class="logo-container">
            <img src="zenith.png" alt="Zenith" class="logo"/>
            <img src="wm.png" alt="WM" class="logo"/>
            <img src="modifest.png" alt="Modifest" class="logo"/>
            <img src="spotlight.png" alt="Spotlight" class="logo"/>
            <img src="cbug.png" alt="CBUG" class="logo"/>
            <img src="gamehub.png" alt="Gamehub" class="logo"/>
            <img src="splash.png" alt="Splash" class="logo"/>
            <img src="appfiesta.png" alt="Appfiesta" class="logo"/>
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
