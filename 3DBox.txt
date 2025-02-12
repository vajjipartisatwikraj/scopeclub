import React, { useEffect, useRef } from "react";
import "./App.css"; // Assuming you save the CSS in a separate file

const AwesomeLayout = () => {
  const preRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      rotateElement(e, preRef.current);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const rotateElement = (event, element) => {
    const x = event.clientX;
    const y = event.clientY;

    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    const offsetX = ((x - middleX) / middleX) * 45;
    const offsetY = ((y - middleY) / middleY) * 45;

    element.style.setProperty("--rotateX", `${offsetX}deg`);
    element.style.setProperty("--rotateY", `${-1 * offsetY}deg`);
  };

  return (
    <div className="pre-container">
      <pre contentEditable className="language-css" tabIndex="0" ref={preRef}>
        <code className="language-css">
          <span className="token selector">.awesome-layouts</span>
          <span className="token punctuation">{`{`}</span>
          <span className="token property">display</span>
          <span className="token punctuation">:</span> grid
          <span className="token punctuation">{`;`}</span>
          <span className="token punctuation">{`}`}</span>
        </code>
      </pre>
    </div>
  );
};

export default AwesomeLayout;
