import "./Resources.css";
import ResourceCard from "./ResourceCard";
import { useState, useEffect, useRef } from "react";
import categoriesData from "../../Assets/Data/ResourcesData.json";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function Resources() {
  const [selectedCategory, setSelectedCategory] = useState("Web Dev");
  const [resources, setResources] = useState({});

  useEffect(() => {
    setResources(categoriesData[selectedCategory] || {});
  }, [selectedCategory]);
  
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
      <div className="resources">
        <div className="rs-top-layer">
          <div className="bottom-image"></div>
          <div className="cu-circle-light"></div>
          <div className="hw1-container">
            <p className="hw1-text">Hello, World<span className="fontChange">!</span></p>
            <div className="hw1-arrow"></div>
          </div>
          <h2 ref={(el) => (headingsRef.current[0] = el)} className="rs-head"><span className="highlighted">Scope</span> Library</h2>
          <p className="rs-caption">We transform coding passion into real-world projects, turning ideas into impactful experiences through collaboration, guidance, and hands-on learning.</p>
        </div>
        <div className="rs-body">
          <div className="rs-dropdown">
            <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory} className="dropdown">
              {Object.keys(categoriesData).map((category, index) => (
                <option className="rs-domain" key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
            {Object.entries(resources).map(([section, technologies]) => (
              <div key={section} className="resource-section">
                <div className="courses">
                <h3 className="section-title">{section}</h3>
                <div className="tech-list">
                  {Object.entries(technologies).map(([tech, details]) => (
                    <ResourceCard
                      key={tech}
                      title={details.title}
                      desc={details.desc}
                      image = {details.image}
                      nlink={details.nlink}
                      vlink={details.vlink}
                    />
                  ))}
                </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Resources;
