import "./Resources.css";
import ResourceCard from "./ResourceCard";
import ed from "../../Assets/Data/EventData";
import { useState } from "react";
import { Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

function Resources() {
  const [event, setEvent] = useState(ed);
  const filterItem = (categItem) => {
    const updatedItems = ed.filter((eve) => {
      return eve.status === categItem;
    });
    setEvent(updatedItems);
  };

  return (
    <div>


      <div>
      <div className="resources">
        <div className="rs-top-layer">
          <div className="bottom-image"></div>
          <div className="cu-circle-light"></div>
          <div className="hw1-container">
            <p className="hw1-text">Hello, World<span className="fontChange">!</span></p>
            <div className="hw1-arrow"></div>
          </div>
           <h2  className="rs-head"><span className="highlighted">Scope</span> Library</h2>
           <p className="rs-caption">We transform coding passion into real-world projects, turning ideas into impactful experiences through collaboration, guidance, and hands-on learning.</p>
        </div>
        <div className="seperator"></div>
      </div>
    </div>
      <div className="but">
        <a onClick={() => filterItem("0")} class="btn41-44 btn-41">
          Past Events
        </a>
        <a onClick={() => filterItem("1")} class="btn41-45 btn-41">
          Upcoming Events
        </a>
      </div>
      <div layout>
        <Grid
          container
          spacing={1}
          justifyContent="center"
          rowGap={8}
          marginTop="40px"
          marginBottom="70px"
        >
          <AnimatePresence>
            {event.map((e) => (
              <Grid item xs={12} sm={7} md={5} lg={4} key={e.id}>
                <ResourceCard
                  key={e.id}
                  title={e.title}
                  date={e.date}
                  time={e.time}
                  venue={e.venue}
                  image={e.image}
                  desc={e.description}
                  extras={e.extras}
                />
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </div>
    </div>
  );
}

export default Resources;
