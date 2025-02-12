import React, { useEffect, useRef } from "react";
import Navbar from './components/Navbar';
import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";
import "./App.css"; // Ensure styles are imported
gsap.registerPlugin(ScrollTrigger);



function App() {


  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      const text = new SplitType(section, { types: "words" });

      gsap.fromTo(
        text.words,
        {
          scaleY: 0,
          y: -20,
          transformOrigin: "top",
          opacity: 0,
        },
        {
          scaleY: 1,
          y: 0,
          opacity: 1,
          color: section.dataset.fgColor,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            toggleActions: "play play reverse reverse",
          },
        }
      );
    });

    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);


  return (
    <div>
      <Navbar></Navbar>
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
          <div className="is-image">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
