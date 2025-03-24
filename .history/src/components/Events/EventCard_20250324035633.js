import "./EventCard.css";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

function EventCard(props) {
  const imageUrl = `url(${process.env.PUBLIC_URL}/${props.image})`; // Assuming props.image is a valid path
  const imageUrl2 = `url(${process.env.PUBLIC_URL}/${props.image2})`;
  const dialogRef = useRef(null);
  
  // Setup ESC key handler
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && dialogRef.current && dialogRef.current.open) {
        dialogRef.current.close();
      }
    };
    document.addEventListener('keydown', handleEsc);
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const openDialog = (e) => {
    e.preventDefault();
    if (dialogRef.current) {
      dialogRef.current.showModal();
      document.body.classList.add('modal-open');
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
      document.body.classList.remove('modal-open');
    }
  };

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
            <div className="thumb"  ><div className="thumb" style={{ backgroundImage: imageUrl, height: '7vh', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', marginTop: '7vh' }} /></div>
            
            <div className="infos">
              <div className="thumb" style={{ backgroundImage: imageUrl2 }} />
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
            <a href="#" className="details" onClick={openDialog}>
              More Info
            </a>
          </div>
        </div>
      </div>
      
      {/* Event Dialog - Enhanced Version */}
      <dialog ref={dialogRef} className="event-dialog">
        <div className="event-dialog-content">
          <button className="event-dialog-close" onClick={closeDialog}>×</button>
          
          <div className="event-dialog-header">
            <div className="event-dialog-banner" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${props.image2})`}}></div>
            <img className="event-dialog-logo" src={`${process.env.PUBLIC_URL}/${props.image}`} alt={props.title} />
            <h2 className="event-dialog-title">{props.title}</h2>
          </div>
          
          <div className="event-dialog-body">
            <div className="event-dialog-details">
              <div className="event-detail">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#36be00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2V6" stroke="#36be00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 2V6" stroke="#36be00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 10H21" stroke="#36be00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{props.date}</span>
              </div>
              
              {props.time && (
                <div className="event-detail">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#36be00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="#36be00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{props.time}</span>
                </div>
              )}
              
              <div className="event-detail">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="#36be00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="#36be00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{props.venue}</span>
              </div>
            </div>
            
            <div className="event-dialog-description">
              <h3>About this event</h3>
              <p>{props.desc}</p>
            </div>
            
            <div className="event-dialog-poster">
              <img src={`${process.env.PUBLIC_URL}/${props.image2}`} alt={`${props.title} poster`} />
            </div>
          </div>
        </div>
      </dialog>
    </motion.div>
  );
}

export default EventCard;
