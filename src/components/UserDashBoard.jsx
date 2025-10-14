import React, { useState, useEffect } from "react";

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate fetching user data from an API when the user logs in
  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: "Gradi Puata",
        email: "gradi@example.com",
        plan: "Premium",
        startDate: "2025-10-01",
        expiryDate: "2026-10-01",
      });
      setLoading(false);
    }, 1500); // Simulate 1.5s delay
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h2>Loading your dashboard...</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "2rem auto",
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#007BFF" }}>User Dashboard</h2>

      <div style={{ marginTop: "20px" }}>
        <h3 style={{ marginBottom: "5px" }}>Personal Details</h3>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3 style={{ marginBottom: "5px" }}>Membership Plan</h3>
        <p>
          <strong>Plan Type:</strong> {user.plan}
        </p>
        <p>
          <strong>Start Date:</strong> {user.startDate}
        </p>
        <p>
          <strong>Expiry Date:</strong> {user.expiryDate}
        </p>
      </div>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          style={{
            backgroundColor: "#28a745",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => alert("Membership renewed!")}
        >
          Renew Membership
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
