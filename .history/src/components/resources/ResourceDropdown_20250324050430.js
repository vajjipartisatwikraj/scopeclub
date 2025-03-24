import React, { useState, useEffect, useRef } from 'react';
import './Resources.css';

function ResourceDropdown({ options, defaultOption, onChange, greenStyle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption || options[0]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div 
      ref={dropdownRef} 
      className={`premium-dropdown ${isOpen ? 'open' : ''} ${greenStyle ? 'premium-dropdown-green' : ''}`}
    >
      <button className="premium-dropdown-btn" onClick={toggleDropdown}>
        {selectedOption.label || selectedOption}
        <span className="premium-dropdown-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </span>
      </button>
      
      <div className="premium-dropdown-content">
        {options.map((option, index) => (
          <a 
            key={index} 
            className={`premium-dropdown-item ${(option.value || option) === (selectedOption.value || selectedOption) ? 'active' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option.label || option}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ResourceDropdown; 