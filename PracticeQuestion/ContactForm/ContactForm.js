import React, { useState, useRef } from 'react';

function ContactForm() {
  // Controlled component state for name and email
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // Uncontrolled component ref for message
  const messageRef = useRef();
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Log form data to the console
    console.log('Form submitted with data:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', messageRef.current.value); // Access the value of the uncontrolled field
  };

  return (
    <div >
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Controlled Name Input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update the state on input change
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Controlled Email Input */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update the state on input change
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Uncontrolled Message Input */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            ref={messageRef} // Uncontrolled component, using a ref
            placeholder="Enter your message"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" >Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
