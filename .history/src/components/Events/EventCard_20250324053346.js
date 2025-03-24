import "./EventCard.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function EventCard(props) {
  const imageUrl = `url(${process.env.PUBLIC_URL}/${props.image})`; // Assuming props.image is a valid path
  const imageUrl2 = `url(${process.env.PUBLIC_URL}/${props.image2})`;
  const dialogRef = useRef(null);
  
  // Debug state
  const [debugInfo, setDebugInfo] = useState({});
  
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

  // Check if event is upcoming (status === "1")
  const isUpcoming = props.status === "1";
  
  // Use either registrationLink or regLink
  const registrationUrl = props.registrationLink || props.regLink || "https://linktr.ee/mlritscope";

  const [open, setOpen] = useState(false);
  const [isCurrentEvent, setIsCurrentEvent] = useState(false);

  useEffect(() => {
    setIsCurrentEvent(props.status === "1");
  }, [props.status]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            </div>
            <a href="#" className="details" onClick={handleClickOpen}>
              More Info
            </a>
          </div>
        </div>
      </div>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="event-dialog-title"
        aria-describedby="event-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: '#121212',
            color: 'white',
            border: '1px solid rgba(54, 190, 0, 0.3)',
            boxShadow: '0 0 20px rgba(54, 190, 0, 0.2)',
            maxWidth: '650px',
            width: '90%'
          },
        }}
      >
        <DialogTitle id="event-dialog-title" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          {props.title}
        </DialogTitle>
        
        <DialogContent>
          <div className="dialog-content">
            <div className="dialog-image-container">
              <img src={props.image2 || props.image} alt={props.title} className="dialog-image" />
            </div>
            
            <div className="dialog-details">
              <div className="dialog-detail">
                <i className="fa-regular fa-calendar"></i>
                <span>{props.date}</span>
              </div>
              
              <div className="dialog-detail">
                <i className="fa-regular fa-clock"></i>
                <span>{props.time}</span>
              </div>
              
              <div className="dialog-detail">
                <i className="fa-solid fa-location-dot"></i>
                <span>{props.venue}</span>
              </div>
              
              {props.prize && (
                <div className="dialog-detail">
                  <i className="fa-solid fa-trophy"></i>
                  <span>{props.prize}</span>
                </div>
              )}
            </div>
            
            <div className="dialog-description">
              <p>{props.desc}</p>
              {props.extras && (
                <div className="dialog-extras">
                  <h4>Additional Information:</h4>
                  <p>{props.extras}</p>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
        
        <DialogActions style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          {isCurrentEvent && props.registrationLink && (
            <Button 
              href={props.registrationLink} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'rgba(54, 190, 0, 0.2)',
                color: '#36be00',
                marginRight: 'auto',
                borderRadius: '4px',
                padding: '8px 16px',
                fontFamily: 'turnkey-medium',
                textTransform: 'none',
                border: '1px solid rgba(54, 190, 0, 0.3)',
              }}
            >
              Register Now
            </Button>
          )}
          
          <Button 
            onClick={handleClose} 
            style={{
              color: 'white',
              borderRadius: '4px',
              padding: '8px 16px',
              fontFamily: 'turnkey-light',
              textTransform: 'none',
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </motion.div>
  );
}

export default EventCard;
