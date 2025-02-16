import "./ContactUs.css";

import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Form from "./Forms";

function ContactUs() {
  return (
    <motion.div
      className="contact"
      initial={{ y: 1, scale: 1, opacity: 0 }}
      animate={{
        y: "10px",
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
      
    >
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
        <Form />
      
    </motion.div>
  );
}

export default ContactUs;
