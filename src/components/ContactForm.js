import React from 'react';

const ContactForm = ({ showContactForm, setShowContactForm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get('name');
    const phoneNumber = formData.get('phoneNumber');
    const email = formData.get('email');
    const selectedTimeSlot = formData.get('timeslot');

    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    console.log("Email:", email);
    console.log("Selected Timeslot:", selectedTimeSlot);
  };


  const formStyle = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontFamily: 'Arial, sans-serif',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '3px',
    border: '1px solid #ccc',
  };

  const selectStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '3px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  };


  if (!showContactForm) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required style={inputStyle} />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" required style={inputStyle} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required style={inputStyle} />
      </div>
      <div>
        <label htmlFor="timeslot">Select Timeslot:</label>
        <select id="timeslot" name="timeslot" style={selectStyle}>
          <option value="9AM-11AM">9AM-11AM</option>
          <option value="12PM-2PM">12PM-2PM</option>
          <option value="3PM-5PM">3PM-5PM</option>
        </select>
      </div>
      <div>
        <button type="submit" style={buttonStyle}>Submit</button>
      </div>
    </form>
  );
  };
  

export default ContactForm;
