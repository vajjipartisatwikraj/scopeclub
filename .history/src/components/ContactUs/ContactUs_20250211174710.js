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
      <h1 className="c-head">
        Interested? <br />
        Let's Talk!
      </h1>
      <p className="c-para">
        Just fill this simple form in and we will contact you promptly. Hate
        forms? Drop us a line at{" "}
        <span>
          <a className="c-mail" href="mailto:scopeclub@mlrinstitutions.ac.in">
            scopeclub@mlrinstitutions.ac.in
          </a>
        </span>
      </p>
        <Form />
      
    </motion.div>
  );
}

export default ContactUs;
