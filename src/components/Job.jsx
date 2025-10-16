import React from "react";

const JobApplicationForm = () => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "410px",
        margin: "50px auto",
        padding: "20px",
        border: "2px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Job Application Form
      </h2>

      {/* Personal Information */}
      <label style={{ marginBottom: "5px", fontWeight: "bold" }}>Full Name:</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your full name"
        style={{
          marginBottom: "15px",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      <label style={{ marginBottom: "5px", fontWeight: "bold" }}>Email:</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        style={{
          marginBottom: "15px",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      {/* Job Preferences */}
      <label style={{ marginBottom: "5px", fontWeight: "bold" }}>
        Preferred Position:
      </label>
      <select
        name="position"
        style={{
          marginBottom: "15px",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        <option value="">Select position</option>
        <option value="frontend">Frontend Developer</option>
        <option value="backend">Backend Developer</option>
        <option value="designer">UI/UX Designer</option>
      </select>

      {/* Cover Letter */}
      <label style={{ marginBottom: "5px", fontWeight: "bold" }}>
        Cover Letter:
      </label>
      <textarea
        name="coverLetter"
        placeholder="Write your cover letter here..."
        rows="5"
        style={{
          marginBottom: "20px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          resize: "none",
        }}
      ></textarea>

      <button
        type="submit"
        style={{
          padding: "10px",
          backgroundColor: "#007bff",
          color: "white",
          fontWeight: "bold",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Submit Application
      </button>
    </form>
  );
};

export default JobApplicationForm;
