import "./Resources.css";
import ResourceCard from "./ResourceCard";
import ResourceDropdown from "./ResourceDropdown";
import { useState, useEffect, useRef } from "react";
import categoriesData from "../../Assets/Data/ResourcesData.json";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Resources() {
  const [selectedCategory, setSelectedCategory] = useState("Web Dev");
  const [resources, setResources] = useState({});

  // Format categories for dropdown based on existing data
  const dropdownOptions = Object.keys(categoriesData).map(category => ({
    value: category,
    label: category
  }));

  // Handle category change using the dropdown
  const handleCategoryChange = (option) => {
    setSelectedCategory(option.value);
    setResources(categoriesData[option.value] || {});
  };

  // Set initial resources when component mounts
  useEffect(() => {
    setResources(categoriesData[selectedCategory] || {});
  }, [selectedCategory]);
  
  // Animation effects for headings
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

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

  return (
    <div className="resources-container">
      <div className="green-container">
        <div className="top-layer">
          <div className="hw-container">
            <p className="hw-text">Hello, World<span className="fontChange">!</span></p>
            <div className="hw-arrow"></div>
          </div>
          <h1 ref={(el) => (headingsRef.current[0] = el)} className="head">Explore our <span className="highlighted">Resources</span>.</h1>
          <p className="caption">Access our curated collection of learning materials, tools, and references.</p>
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

      {/* Premium styled dropdown */}
      <ResourceDropdown 
        options={dropdownOptions}
        defaultOption={dropdownOptions.find(option => option.value === selectedCategory)}
        onChange={handleCategoryChange}
        greenStyle={true} // Use green styling
      />

      <div className="rs-body">
        <div className="resource-section">
          <h2 className="section-title">{selectedCategory}</h2>
          <div className="courses">
            <div className="tech-list">
              {Object.entries(resources).map(([techName, details]) => (
                <ResourceCard
                  key={techName}
                  title={details.title}
                  desc={details.desc}
                  image={details.image}
                  vlink={details.vlink}
                  nlink={details.nlink}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
