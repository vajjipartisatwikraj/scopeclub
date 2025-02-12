import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function App() {

  const headingsRef = useRef([]);

  useEffect(() => {
    gsap.utils.toArray([".wdwd-01-num", ".wdwd-02-num", ".wdwd-03-num"]).forEach((num) => {
      gsap.to(num, {
        color: "#33d90b", // Hover color
        duration: 0.5, // Smooth transition
        scrollTrigger: {
          trigger: num,
          start: "top 100%", // Adjust trigger position
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);
  

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
    <Home></Home>
  );
}

export default App;
