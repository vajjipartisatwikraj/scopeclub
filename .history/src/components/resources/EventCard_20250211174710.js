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
          <div>
            <h2 className="title">
              <span className="ellipss">{props.title}</span>
              <span className="time">{props.time}</span>
            </h2>
            <h3 className="detail">{props.date}</h3>
            <h3 className="detail">{props.venue}</h3>
            <p className="txt">{props.desc}</p>
          </div>
          <a href="/" className="details" target="_blank">
            More Info
          </a>
        </div>
      </article>
    </motion.div>
  );
}

export default EventCard;
