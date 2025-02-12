import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function App() {

  const headingsRef = useRef([]);
  const textRef = useRef(null);


  useEffect(() => {
    headingsRef.current.forEach((heading) => {
      if (heading) {
        let letters = Array.from(heading.childNodes);
        heading.innerHTML = '';

        letters.forEach((node) => {
          if (node.nodeType === 3) { // Text node
            node.textContent.split('').forEach((char) => {
              let span = document.createElement('span');
              if (char === ' ') {
                span.innerHTML = '&nbsp;';
              } else {
                span.textContent = char;
              }
              span.style.display = 'inline-block';
              heading.appendChild(span);
            });
          } else {
            heading.appendChild(node.cloneNode(true)); // Preserve existing elements like spans
          }
        });

        gsap.fromTo(
          heading.children,
          { opacity: 0, y: -50, rotationX: 90 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1.2,
            ease: 'power3.out',
            stagger: 0.05,
            scrollTrigger: {
              trigger: heading,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

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
    <div>
      <Navbar />
      <div className="green-container">
        <div className="top-layer">
          <div className="hw-container">
            <p className="hw-text">Hello, World<span className="fontChange">!</span></p>
            <div className="hw-arrow"></div>
          </div>
          <h1 ref={(el) => (headingsRef.current[4] = el)} className="head">We Are Team <span className="highlighted">Scope</span>.</h1>
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
            <h2 ref={(el) => (headingsRef.current[0] = el)} className='is-head'>Inside <span className="highlighted">Scope</span>.</h2>
            <p className='is-caption'>SCOPE Club, the technical club of MLRIT, fosters a strong coding culture through collaboration and events in AI, Open Source, Game Development, Web & App Development, and more. It connects students with experienced mentors, providing an official platform for guidance, networking, and growth beyond campus boundaries.</p>
          </div>
          <div className="is-image"></div>
        </div>
      </div>
      <div className="wdwd">
        <h2 ref={(el) => (headingsRef.current[1] = el)} className="wdwd-head">What do <span className="highlighted">we DO</span>?</h2>
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
        <div className="brand-events-top-container">
        <h2 ref={(el) => (headingsRef.current[2] = el)} className="brand-events-head">Our <span className="highlighted">events</span> define our <span className="highlighted">brand</span>.</h2>
        <p className="brand-events-caption">SCOPE Club events drive innovation through hackathons, coding contests, and tech workshops. We foster hands-on learning, mentorship, and collaboration. From problem-solving to real-world impact, our events shape a thriving tech community.</p>
        </div>
        <div className="brand-events-bottom-container">
        <div className="logo-container">
          <img src="/images/zenith.png" alt="Zenith" className="logo" />
          <img src="/images/webmania.png" alt="webmania" className="logo" />
          <img src="/images/modifest.png" alt="Modifest" className="logo" />
          <img src="/images/spotlight.png" alt="Spotlight" className="logo" />
          <img src="/images/cbug.png" alt="CBUG" className="logo" />
          <img src="/images/gamehub.png" alt="Gamehub" className="logo" />
          <img src="/images/splash.png" alt="Splash" className="logo" />
          <img src="/images/appfiesta.png" alt="Appfiesta" className="logo" />
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
