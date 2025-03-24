import "./EventCard.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function EventCard(props) {
  const imageUrl = `url(${process.env.PUBLIC_URL}/${props.image})`; // Assuming props.image is a valid path
  const imageUrl2 = `url(${process.env.PUBLIC_URL}/${props.image2})`;
  const dialogRef = useRef(null);
  const dialogContentRef = useRef(null);
  const [isIOS, setIsIOS] = useState(false);
  
  // Debug state
  const [debugInfo, setDebugInfo] = useState({});
  
  // Detect iOS device
  useEffect(() => {
    const checkIOS = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };
    setIsIOS(checkIOS());
  }, []);
  
  // Setup ESC key handler
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && dialogRef.current && dialogRef.current.open) {
        dialogRef.current.close();
      }
    };
    document.addEventListener('keydown', handleEsc);
    
    // For debugging
    setDebugInfo({
      status: props.status,
      isUpcoming: props.status === "1",
      regLink: props.regLink,
      registrationLink: props.registrationLink
    });
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [props.status, props.regLink, props.registrationLink]);

  const openDialog = (e) => {
    e.preventDefault();
    if (dialogRef.current) {
      // iOS workaround for dialog element
      if (isIOS) {
        dialogRef.current.setAttribute('open', '');
        document.body.classList.add('ios-modal-open');
        // Prevent background scrolling on iOS
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${window.scrollY}px`;
      } else {
        dialogRef.current.showModal();
      }
      document.body.classList.add('modal-open');
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      // iOS workaround for dialog element
      if (isIOS) {
        dialogRef.current.removeAttribute('open');
        document.body.classList.remove('ios-modal-open');
        // Restore scrolling on iOS
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      } else {
        dialogRef.current.close();
      }
      document.body.classList.remove('modal-open');
    }
  };

  // Check if event is upcoming (status === "1")
  const isUpcoming = props.status === "1";
  
  // Use either registrationLink or regLink
  const registrationUrl = props.registrationLink || props.regLink || "https://linktr.ee/mlritscope";

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
      <dialog ref={dialogRef} className={`event-dialog ${isIOS ? 'ios-dialog' : ''}`}>
        <div ref={dialogContentRef} className="event-dialog-content">
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
            
            <div className="event-dialog-description">
              <h3>About this event</h3>
              <p>{props.desc}</p>
            </div>
            
            {/* Registration button for upcoming events */}
            {isUpcoming && (
              <div className="event-dialog-register">
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
            
            <div className="event-dialog-poster">
              <img src={`${process.env.PUBLIC_URL}/${props.image2}`} alt={`${props.title} poster`} />
            </div>
            
            {/* Debug info - remove in production */}
            {false && (
              <div style={{marginTop: '20px', padding: '10px', background: '#333', fontSize: '12px'}}>
                <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>
      </dialog>
    </motion.div>
  );
}

export default EventCard;
