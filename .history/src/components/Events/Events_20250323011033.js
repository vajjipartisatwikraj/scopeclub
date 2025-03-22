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
  const [activeFilter, setActiveFilter] = useState("1"); // Default to upcoming events
  
  useEffect(() => {
    // Set initial filter to upcoming events
    filterItem("1");
  }, []);

  const filterItem = (categItem) => {
    setActiveFilter(categItem);
    const updatedItems = ed.filter((eve) => {
      return eve.status === categItem;
    });
    setEvent(updatedItems);
  };

  const headingsRef = useRef([]);
  const eventsRef = useRef(null);

  // Create particles
  useEffect(() => {
    if (eventsRef.current) {
      // Create particles
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random positions and animation durations
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${15 + Math.random() * 15}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        eventsRef.current.appendChild(particle);
      }
    }
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

  // Animation variants for cards
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: i => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }),
    exit: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5
      }
    }
  };

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
        <div className="events-filter-container">
          <a 
            onClick={() => filterItem("0")} 
            className={`btn41-44 btn-41 ${activeFilter === "0" ? "active-filter" : ""}`}
          >
            Past Events
          </a>
          <a 
            onClick={() => filterItem("1")} 
            className={`btn41-45 btn-41 ${activeFilter === "1" ? "active-filter" : ""}`}
          >
            Upcoming Events
          </a>
        </div>
      </div>
      
      <div className="events-backdrop">
        <div className="glowing-line"></div>
        <div className="grid-dots"></div>
      </div>
      
      <div className="events1" ref={eventsRef}>
        <AnimatePresence mode="wait">
          {event.map((e, index) => (
            <motion.div
              key={e.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
            >
              <EventCard
                title={e.title}
                date={e.date}
                time={e.time}
                venue={e.venue}
                image={e.image}
                desc={e.description}
                extras={e.extras}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Events;
