import React, { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateDate = (date) => {  
    const selectedDate = new Date(date);
    const currentDate = new Date();
    return selectedDate > currentDate;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email || !validateEmail(formData.email))
      formErrors.email = "Please enter a valid email.";
    if (!formData.date || !validateDate(formData.date))
      formErrors.date = "Please select a future date.";
    if (!formData.time) formErrors.time = "Time is required.";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Appointment scheduled successfully!");
      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
      });
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Schedule Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}
        </div>

        <div>
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
          {errors.time && <p style={{ color: "red" }}>{errors.time}</p>}
        </div>

        <button type="submit">Schedule</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
