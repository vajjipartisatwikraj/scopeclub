import "./EventCard.css";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

function EventCard(props) {
  const imageUrl = `url(${process.env.PUBLIC_URL}/${props.image})`; // Assuming props.image is a valid path
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  // 3D tilt effect
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      setMousePosition({
        x: (x / width - 0.5) * 20, // -10 to 10 degree rotation
        y: (y / height - 0.5) * -20 // -10 to 10 degree rotation (inverted)
      });
    };

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
        transition: "transform 0.2s ease-out"
      }}
      whileHover={{ scale: 1.02 }}
      className="event"
      ref={cardRef}
    >
      <div className="EventCard">
        <motion.div 
          className="thumb" 
          style={{ backgroundImage: imageUrl }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      <div className="information">
        <div className="event-card-inner-container">
          <h2 className="title">
            <span className="ellipss">{props.title}</span>
          </h2>
          <h3 className="detail">{props.date}</h3>
          <h3 className="detail">{props.venue}</h3>
          <p className="txt">{props.desc}</p>
        </div>
        <motion.a 
          href="/" 
          className="details" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(54, 190, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          More Info
        </motion.a>
      </div>
    </motion.div>
  );
}

export default EventCard;
