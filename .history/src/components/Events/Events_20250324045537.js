import "./Events.css";
import EventCard from "./EventCard";
import ed from "../../Assets/Data/EventData";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function Events() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

  
  const [event, setEvent] = useState(ed);
  const [activeButton, setActiveButton] = useState("past"); // Default to past events
  
  const filterItem = (categItem) => {
    const updatedItems = ed.filter((eve) => {
      return eve.status === categItem;
    });
    setEvent(updatedItems);
    setActiveButton(categItem === "0" ? "past" : "upcoming");
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
    <div>
      <div className="green-container">
        <div className="top-layer">
          <div className="hw-container">
            <p className="hw-text">Hello, World<span className="fontChange">!</span></p>
            <div className="hw-arrow"></div>
          </div>
          <h1 ref={(el) => (headingsRef.current[0] = el)} className="head">Explore the <span className="highlighted">Scope </span>Events.</h1>
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

      <div className="but">
        <a 
          onClick={() => filterItem("0")} 
          className={`btn41-44 btn-41 ${activeButton === "past" ? "active" : ""}`}
        >
          Past Events
        </a>
        <a 
          onClick={() => filterItem("1")} 
          className={`btn41-45 btn-41 ${activeButton === "upcoming" ? "active" : ""}`}
        >
          Upcoming Events
        </a>
      </div>
        <div className="events1"
        >
          <AnimatePresence>
            {event.map((e) => (
              <div key={e.id}>
                <EventCard
                  title={e.title}
                  date={e.date}
                  time={e.time}
                  venue={e.venue}
                  image={e.image}
                  image2={e.image2}
                  desc={e.description}
                  extras={e.extras}
                  status={e.status}
                  prize={e.prize}
                  registrationLink={e.registrationLink}
                />
              </div>
            ))}
          </AnimatePresence>
        </div>
      
    </div>
  );
}

export default Events;
