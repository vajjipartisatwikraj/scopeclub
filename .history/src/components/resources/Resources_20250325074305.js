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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectOption = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div>
      <div className="resources">
        <div className="rs-top-layer">
          <div className="bottom-image"></div>
          <div className="c-circle-light"></div>
          <div className="resources-contents-container">
            <h2 ref={(el) => (headingsRef.current[0] = el)} className="rs-head"><span className="highlighted">Scope</span> Library.</h2>
            <p className="rs-caption">We transform coding passion into real-world projects, turning ideas into impactful experiences through collaboration, guidance, and hands-on learning.</p>
          </div>
          </div>
        <div className="rs-body">
          <div className="custom-dropdown-container" ref={dropdownRef}>
            <button className="custom-dropdown-button" onClick={toggleDropdown}>
              <span className="dropdown-dot"></span>
              <span>{selectedCategory}</span>
              <span className="dropdown-arrow"></span>
            </button>
            
            {dropdownOpen && (
              <div className="custom-dropdown-menu">
                {Object.keys(categoriesData).map((category, index) => (
                  <div 
                    key={index} 
                    className={`custom-dropdown-item ${category === selectedCategory ? 'active' : ''}`}
                    onClick={() => selectOption(category)}
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>
            {Object.entries(resources).map(([section, technologies]) => (
              <div key={section} className="resource-section">
                <h3 className="section-title">{section}</h3>
                <div className="courses">
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
