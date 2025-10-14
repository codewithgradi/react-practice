import React, { useState, useEffect } from "react";

const SignupForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plan: "Basic",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      console.log("Form submitted:", formData);
    }
  }, [submitted]);

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{ 
        maxWidth: "400px", 
        margin: "auto", 
        display: "flex", 
        flexDirection: "column", 
        gap: "10px",
        backgroundColor: "#f7f7f7",
        padding: "20px",
        borderRadius: "10px"
      }}
    >
      <h2>Gym Membership Signup</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
        required
      />

      <select
        name="plan"
        value={formData.plan}
        onChange={handleChange}
        style={{ padding: "10px", borderRadius: "5px" }}
      >
        <option>Basic</option>
        <option>Pro</option>
        <option>Premium</option>
      </select>

      <button
        type="submit"
        style={{
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
