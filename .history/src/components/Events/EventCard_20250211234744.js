import "./EventCard.css";
import { motion } from "framer-motion";

function EventCard(props) {
  const imageUrl = `url(${props.image})`;
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <article className="EventCard mix ">
        <div className="thumb" style={{ backgroundImage: imageUrl }} />
        <div className="infos">
          
        </div>
      </article>
    </motion.div>
  );
}

export default EventCard;
