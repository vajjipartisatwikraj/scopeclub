import "./ContactUs.css";


import Form from "./Forms";
import React, { useEffect, useRef } from 'react';
import '../../App.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ContactUs() {

  const headingsRef = useRef([]);

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

  return (
        <>
          <div className="contactus">
            <div className="contactus-container">
              <h2 ref={(el) => (headingsRef.current[0] = el)} className="contactus-head">
                Get in Touch!
              </h2>
              <p className="cu-caption">Have questions, ideas, or want to collaborate with us? We're always excited to connect with like-minded tech enthusiasts!</p>
              <div className="cu-circle-light"></div>
              
            </div>
            <div className="contactus-body">
                <Form></Form>
              </div>
          </div>

        </>
      
  );
}

export default ContactUs;
