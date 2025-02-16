import "./Resources.css";
import ResourceCard from "./ResourceCard";
import ed from "../../Assets/Data/EventData";
import { useState } from "react";
import { Grid } from "@mui/material";

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
        <div className=" seperator but"></div>
      <div className="ResourceCard-container">
            {event.map((e) => (
              <div  key={e.id}>
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
              </div>
            ))}
            </div>
      </div>
    </div>
      
    </div>
  );
}

export default Resources;
