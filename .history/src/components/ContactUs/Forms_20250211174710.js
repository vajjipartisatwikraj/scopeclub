import React, { useState } from "react";
import "./forms.css";
const Form = () => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.337529367": "",
    "entry.144331048": "",
    "entry.602409789": ""
  });

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSeR8WEc7s8CgmwcQ_bPWjYrNtc1OMrGkHC4kuBfa5dKNDvIvw/formResponse?entry.337529367=${formData["entry.337529367"]}&entry.144331048=${formData["entry.144331048"]}&entry.602409789=${formData["entry.602409789"]}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }
  return (
    <div className="contactFormWrapper">
      <div className="formheader"></div>
      <div className="formcontact">
        {submit ? (
          <div className="afterForm">Thanks, will get back to you soon</div>
        ) : (
          <form onSubmit={handleSubmit} target="_self">
            <fieldset>
              <label htmlFor="entry.337529367">Name:</label>
              <input
                required
                type="text"
                name="entry.337529367"
                onChange={handleInputData("entry.337529367")}
                value={formData["entry.337529367"]}
                autoComplete={false}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="entry.144331048">E-mail:</label>
              <input
                required
                type="email"
                name="entry.144331048"
                onChange={handleInputData("entry.144331048")}
                value={formData["entry.144331048"]}
                autoComplete={false}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="entry.602409789">Message:</label>
              <textarea
                required
                name="entry.602409789"
                rows="4"
                cols="10"
                onChange={handleInputData("entry.602409789")}
                value={formData["entry.602409789"]}
                autoComplete={false}
              ></textarea>
            </fieldset>

            <button type="submit">Connect</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
