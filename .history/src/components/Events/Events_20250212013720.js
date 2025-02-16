import "./Events.css";
import EventCard from "./EventCard";
import ed from "../../Assets/Data/EventData";
import { useState } from "react";
import { Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

function Events() {
  const [event, setEvent] = useState(ed);
  const filterItem = (categItem) => {
    const updatedItems = ed.filter((eve) => {
      return eve.status === categItem;
    });
    setEvent(updatedItems);
  };

  return (
    <div
      className="Events"
      initial={{ y: 0, scale: 1, opacity: 0 }}
      animate={{
        y: "20px",
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
    >
      
      

      <div className="but">
        <a onClick={() => filterItem("0")} class="btn41-44 btn-41">
          Past Events
        </a>
        <a onClick={() => filterItem("1")} class="btn41-45 btn-41">
          Upcoming Events
        </a>
      </div>
      <motion.div layout>
        <div className="events"
        >
          <AnimatePresence>
            {event.map((e) => (
              <div item xs={12} sm={7} md={5} lg={4} key={e.id}>
                <EventCard
                  key={e.id}
                  title={e.title}
                  date={e.date}
                  time={e.time}
                  venue={e.venue}
                  image={e.image}
                  desc={e.description}
                  extras={e.extras}
                />
              </div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

export default Events;
