import "./EventCard.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function EventCard(props) {
  const imageUrl = `url(${process.env.PUBLIC_URL}/${props.image})`;
  const imageUrl2 = `url(${process.env.PUBLIC_URL}/${props.image2})`;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  
  // Check if event is upcoming (status === "1")
  const isUpcoming = props.status === "1";
  
  // Use either registrationLink or regLink
  const registrationUrl = props.registrationLink || props.regLink || "https://linktr.ee/mlritscope";

  // Handle modal open
  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Handle modal close
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  // Handle clicking outside to close
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen]);

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
            <a href="#" className="details" onClick={openModal}>
              More Info
            </a>
          </div>
        </div>
      </div>
      
      {/* Custom Modal Implementation */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="custom-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleBackdropClick}
          >
            <motion.div 
              className="custom-modal-container"
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
            >
              <button className="custom-modal-close" onClick={closeModal}>×</button>
              
              <div className="custom-modal-header">
                <div className="custom-modal-banner" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${props.image2})`}}></div>
                <img className="custom-modal-logo" src={`${process.env.PUBLIC_URL}/${props.image}`} alt={props.title} />
                <h2 className="custom-modal-title">{props.title}</h2>
              </div>
              
              <div className="custom-modal-body">
                <div className="custom-modal-details">
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
                  
                  {/* Add prize pool if available */}
                  {props.prize && (
                    <div className="event-detail event-detail-prize">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 21V16.8C8 16.8 9.81818 16 12 16C14.1818 16 16 16.8 16 16.8V21" stroke="#36be00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 6V10C5 13.3137 8.13401 16 12 16C15.866 16 19 13.3137 19 10V6" stroke="#36be00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 8C16 9.10457 14.2091 10 12 10C9.79086 10 8 9.10457 8 8" stroke="#36be00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 10V12" stroke="#36be00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 4V2" stroke="#36be00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 3L16.397 5.603" stroke="#36be00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Prize Pool: {props.prize}</span>
                    </div>
                  )}
                </div>
                
                <div className="custom-modal-description">
                  <h3>About this event</h3>
                  <p>{props.desc}</p>
                </div>
                
                {/* Registration button for upcoming events */}
                {isUpcoming && (
                  <div className="custom-modal-register">
                    <a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="register-button">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H9L11 5H19C20.1 5 21 5.9 21 7V19C21 20.1 20.1 21 19 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 11V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 14H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Register Now
                    </a>
                  </div>
                )}
                
                <div className="custom-modal-poster">
                  <img src={`${process.env.PUBLIC_URL}/${props.image2}`} alt={`${props.title} poster`} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default EventCard;
