import "./ContactUs.css";


import Form from "./Forms";

function ContactUs() {
  return (
        <>
          <div className="contactus">
            <div className="contactus-container">
              <div className="contactus-head">
                Get in Touch!
              </div>
              <div className="contactus-body">
                <Form></Form>
              </div>
            </div>
          </div>
        </>
      
  );
}

export default ContactUs;
