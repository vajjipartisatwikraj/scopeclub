import "./Events.css";
import {React, useEffect, useRef} from 'react';

import EventCard from "./EventCard";
import ed from "../../Assets/Data/EventData";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function Events() {
  const [event, setEvent] = useState(ed);
  const filterItem = (categItem) => {
    const updatedItems = ed.filter((eve) => {
      return eve.status === categItem;
    });
    setEvent(updatedItems);
  };

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
    <div className="green-container">
        <div className="top-layer">
          <div className="hw-container">
            <p className="hw-text">Hello, World<span className="fontChange">!</span></p>
            <div className="hw-arrow"></div>
          </div>
          <h1 ref={(el) => (headingsRef.current[0] = el)} className="head">Meet our Team <span className="highlighted">Scope</span>.</h1>
          <p className="caption">"Coming together is a beginning, staying together is progress, and
          working together is success."
          – Henry Ford</p>
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
    <div
      
    >
      

      <div className="but">
        <a onClick={() => filterItem("0")} class="btn41-44 btn-41">
          Past Events
        </a>
        <a onClick={() => filterItem("1")} class="btn41-45 btn-41">
          Upcoming Events
        </a>
      </div>
      <motion.div layout>
        <div className="events"
        >
          <AnimatePresence>
            {event.map((e) => (
              <div item xs={12} sm={7} md={5} lg={4} key={e.id}>
                <EventCard
                  key={e.id}
                  title={e.title}
                  date={e.date}
                  time={e.time}
                  venue={e.venue}
                  image={e.image}
                  desc={e.description}
                  extras={e.extras}
                />
              </div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div></>
  );
}

export default Events;
