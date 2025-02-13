import "./Resources.css";
import ResourceCard from "./ResourceCard";
import { useState, useEffect } from "react";
import categoriesData from "../../Assets/Data/ResourcesData.json";

function Resources() {
  const [selectedCategory, setSelectedCategory] = useState("Web Dev");
  const [resources, setResources] = useState({});

  useEffect(() => {
    setResources(categoriesData[selectedCategory] || {});
  }, [selectedCategory]);

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
          <h2 className="rs-head"><span className="highlighted">Scope</span> Library</h2>
          <p className="rs-caption">We transform coding passion into real-world projects, turning ideas into impactful experiences through collaboration, guidance, and hands-on learning.</p>
        </div>
        <div className="rs-body but">
          <div className="rs-dropdown">
            <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory} className="dropdown">
              {Object.keys(categoriesData).map((category, index) => (
                <option className="rs-domain" key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="ResourceCrd-container">
            {Object.entries(resources).map(([section, technologies]) => (
              <div key={section} className="resource-section">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
