import React, { useState } from "react";
import "./forms.css";

function App() {
  const [formState, setFormState] = useState({ status: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required.";
    }
    return errors;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      const formPayload = new FormData(event.target);
      formPayload.append("access_key", "dc84a154-1bbc-46a3-afb8-0bdae92f45d9");

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formPayload,
        }).then((res) => res.json());

        if (res.success) {
          setFormState({ status: "success", message: "Form submitted successfully!" });
          setFormData({ name: "", email: "", message: "" });
          event.target.reset();
        } else {
          setFormState({ status: "error", message: "Form submission failed. Please try again!" });
        }
      } catch (error) {
        setFormState({ status: "error", message: "An error occurred. Please try again!" });
      }

      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form className="contact-container" onSubmit={onSubmit} noValidate>
        {/* Name Field */}
        <div className="name-parent form-group">
          <label className="name-label">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={`field-input form-control ${formErrors.username ? "error-input" : ""}`}
          />
          {formErrors.name && <div className="error-message">{formErrors.name}</div>}
        </div>

        {/* Email Field */}
        <div className="form-group">
        <label className="email-label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`field-input form-control ${formErrors.username ? "error-input" : ""}`}
          />
          {formErrors.email && <div className="error-message">{formErrors.email}</div>}
        </div>

        {/* Message Field */}
        <div className="form-group">
        <label className="message-label">Message</label>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className={`field-input form-control ${formErrors.username ? "error-input" : ""}`}
          ></textarea>
          {formErrors.message && <div className="error-message">{formErrors.message}</div>}
        </div>

        {/* Submit Button */}
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Form"}
        </button>
      </form>

      {/* Success/Error Message */}
      {formState.message && (
        <p className={formState.status === "success" ? "success-text" : "error-text"}>
          {formState.message}
        </p>
      )}
    </div>
  );
}

export default App;
