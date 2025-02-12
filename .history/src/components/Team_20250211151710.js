import "../App.css";
import "./Teams.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

function Team() {
  const headingsRef = useRef([]);

  useEffect(() => {
    headingsRef.current.forEach((heading) => {
      if (heading) {
        let letters = Array.from(heading.childNodes);
        heading.innerHTML = "";

        letters.forEach((node) => {
          if (node.nodeType === 3) {
            // Text node
            node.textContent.split("").forEach((char) => {
              let span = document.createElement("span");
              if (char === " ") {
                span.innerHTML = "&nbsp;";
              } else {
                span.textContent = char;
              }
              span.style.display = "inline-block";
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
            ease: "power3.out",
            stagger: 0.05,
            scrollTrigger: {
              trigger: heading,
              start: "top 80%",
              toggleActions: "play none none reverse",
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
            <p className="hw-text">
              Hello, World<span className="fontChange">!</span>
            </p>
            <div className="hw-arrow"></div>
          </div>
          <h1 ref={(el) => (headingsRef.current[4] = el)} className="head">
            We Are Team <span className="highlighted">Scope</span>.
          </h1>
          <p className="caption">
            Coming together is a beginning, staying together is progress, and
            working together is success. Henry Ford
          </p>
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
      <div className="teams">
        <div className="teams-container">
          <div className="teams-bod">
            <p className="temas-bod-head">Board of Directors</p>
            <div className="bod-container">
              <div className="profile-img"></div>
              <div className="bod-details">
                <div className="name-container">
                  <p className="name">Dr.N.V.Raja Shekar Reddy</p>
                </div>
                <p className="dob-info">Club Head,HOD-IT, HOD- Trainings</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
