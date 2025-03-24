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
    // Get the actual array of resources for this category
    const categoryResources = categoriesData[option.value] || [];
    setResources(Array.isArray(categoryResources) ? categoryResources : []);
  };

  // Set initial resources when component mounts
  useEffect(() => {
    console.log("Selected category:", selectedCategory);
    console.log("Category data:", categoriesData[selectedCategory]);
    
    // Get the actual array of resources for this category
    const categoryResources = categoriesData[selectedCategory] || [];
    setResources(Array.isArray(categoryResources) ? categoryResources : []);
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

  console.log("Current resources:", resources);

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
              {resources.length > 0 ? (
                resources.map((resource, index) => (
                  <ResourceCard
                    key={index}
                    title={resource.title}
                    desc={resource.desc}
                    image={resource.image}
                    vlink={resource.vlink}
                    nlink={resource.nlink}
                  />
                ))
              ) : (
                <p className="no-resources">No resources available for this category.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
