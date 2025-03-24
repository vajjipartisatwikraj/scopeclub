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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
    
    if (!isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }
  };

  const handleClickOutside = (e) => {
    const container = document.querySelector('.tech-select-container');
    if (container && !container.contains(e.target)) {
      setIsDropdownOpen(false);
      document.removeEventListener('click', handleClickOutside);
    }
  };

  const handleOptionClick = (category, e) => {
    if (e) e.stopPropagation();
    setSelectedCategory(category);
    setResources(categoriesData[category] || {});
    setIsDropdownOpen(false);
    document.removeEventListener('click', handleClickOutside);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="resources">
        <div className="rs-top-layer">
          <div className="bottom-image"></div>
          <div className="c-circle-light"></div>

          <h2 ref={(el) => (headingsRef.current[0] = el)} className="rs-head"><span className="highlighted">Scope</span> Library.</h2>
          <p className="rs-caption">We transform coding passion into real-world projects, turning ideas into impactful experiences through collaboration, guidance, and hands-on learning.</p>
        </div>
        <div className="rs-body">
          <div className="tech-select-container">
            <div 
              className={`tech-select ${isDropdownOpen ? 'open' : ''}`}
              onClick={toggleDropdown}
            >
              <div className="tech-select-header">
                <div className="tech-select-value">{selectedCategory}</div>
                <div className="tech-select-arrow"></div>
              </div>
              
              <div className="tech-select-dropdown">
                {Object.keys(categoriesData).map((category, index) => (
                  <div 
                    key={index} 
                    className={`tech-select-option ${category === selectedCategory ? 'selected' : ''}`}
                    onClick={(e) => {
                      handleOptionClick(category, e);
                    }}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
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
