import React, { useState } from "react";

function App() {
  const [formState, setFormState] = useState({ status: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "dc84a154-1bbc-46a3-afb8-0bdae92f45d9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setFormState({ status: "success", message: "Form submitted successfully!" });
        event.target.reset();
      } else {
        setFormState({ status: "error", message: "Form submission failed. Please try again!" });
      }
    } catch (error) {
      setFormState({ status: "error", message: "An error occurred. Please try again!" });
    }

    setLoading(false);
  };

  return (
    <div>
      <form  onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Form"}
        </button>
      </form>
      {formState.message && (
        <p style={{ color: formState.status === "success" ? "green" : "red" }}>
          {formState.message}
        </p>
      )}
    </div>
  );
}

export default App;
