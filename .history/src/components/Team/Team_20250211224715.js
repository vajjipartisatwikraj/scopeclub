import "./Team.css";
import { bod } from "../../Assets/Data/TeamData";
import { t22 } from "../../Assets/Data/TeamData22";
import { t23 } from "../../Assets/Data/TeamData23";
import { t24 } from "../../Assets/Data/TeamData24";
import { t25 } from "../../Assets/Data/TeamData25";
import { t26 } from "../../Assets/Data/TeamData26";
import { t27 } from "../../Assets/Data/TeamData27";
import TeamCard from "./TeamCard";
import React, { useEffect, useRef } from 'react';
import '../../App.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function Team() {

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
      <div className="head">
        <h3 className="team-q">
          
        </h3>
        <h2 ref={(el) => (headingsRef.current[1] = el)} className="team-p">Board of Directors</h2>

        <div className="bodd">
          {bod.map((t) => (
            <TeamCard
              key={t.id}
              image={t.image}
              name={t.name}
              position={t.position}
              git={t.socials.github}
              insta={t.socials.instagram}
              li={t.socials.linkedin}
            />
          ))}
        </div>
        <h2 ref={(el) => (headingsRef.current[2] = el)} className="team-p">Team 2k27</h2>
        <div className="bod">
          {t27.map((t) => (
            <TeamCard
              key={t.id}
              image={t.image}
              
              name={t.name}
              position={t.position}
              git={t.socials.github}
              insta={t.socials.instagram}
              li={t.socials.linkedin}
            />
          ))}
        </div>
        <h2 ref={(el) => (headingsRef.current[3] = el)} className="team-p">Team 2k26</h2>
        <div className="bod">
          {t26.map((t) => (
            <TeamCard
              key={t.id}
              image={t.image}
              name={t.name}
              position={t.position}
              git={t.socials.github}
              insta={t.socials.instagram}
              li={t.socials.linkedin}
            />
          ))}
        </div>
        <h2 ref={(el) => (headingsRef.current[4] = el)} className="team-p">Team 2k25</h2>
        <div className="bod">
          {t25.map((t) => (
            <TeamCard
              key={t.id}
              image={t.image}
              name={t.name}
              position={t.position}
              git={t.socials.github}
              insta={t.socials.instagram}
              li={t.socials.linkedin}
            />
          ))}
        </div>
        <h2 ref={(el) => (headingsRef.current[5] = el)} className="team-p">Team 2k24</h2>
        <div className="bod">
          {t24.map((t) => (
            <TeamCard
              key={t.id}
              image={t.image}
              name={t.name}
              position={t.position}
              git={t.socials.github}
              insta={t.socials.instagram}
              li={t.socials.linkedin}
            />
          ))}
        </div>
        <h2 ref={(el) => (headingsRef.current[6] = el)} className="team-p">Team 2k23</h2>
        <div className="bod">
          {t23.map((t) => (
            <TeamCard
              key={t.id}
              image={t.image}
              name={t.name}
              position={t.position}
              git={t.socials.github}
              insta={t.socials.instagram}
              li={t.socials.linkedin}
            />
          ))}
        </div>
        <h2 ref={(el) => (headingsRef.current[7] = el)} className="team-p">Team 2k22</h2>
        <div className="bod">
          {t22.map((t) => (
            <TeamCard
              key={t.id}
              image={t.image}
              name={t.name}
              position={t.position}
              git={t.socials.github}
              insta={t.socials.instagram}
              li={t.socials.linkedin}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;
