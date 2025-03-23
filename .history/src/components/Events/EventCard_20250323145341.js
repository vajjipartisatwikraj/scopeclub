import "./EventCard.css";
import { motion } from "framer-motion";

function EventCard(props) {
  const imageUrl = `url(${process.env.PUBLIC_URL}/${props.image})`; // Assuming props.image is a valid path
  const imageUrl2 = `url(${process.env.PUBLIC_URL}/${props.image2})`;
  console.log(props.imageUrl);
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <div className="events">
          <div className="event">
            <article className="EventCard mix">
              <div className="thumb" style={{ backgroundImage: imageUrl }} />
              <div className="infos">
                <div className="thumb" style={{ backgroundImage: imageUrl }} />
                  <div className="thumb-img" style={{ backgroundImage: imageUrl2 }} />
              </div>
            </article>
            <div className="information">
              <div className="event-card-inner-container">
                <h2 className="title">
                  <span className="ellipss">{props.title}</span>
                </h2>
                <h3 className="detail">{props.date}</h3>
                <h3 className="detail">{props.venue}</h3>
                <p className="txt">{props.desc}</p>
              </div>
              <a href="/" className="details" target="_blank" rel="noopener noreferrer">
                More Info
              </a>
            </div>
        </div>
      </div>
    </motion.div>
  );
}

export default EventCard;
