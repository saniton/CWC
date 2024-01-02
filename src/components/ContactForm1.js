import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNo: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    phoneNo: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { ...formErrors };

    // Validation logic remains the same as in your initial code

    if (valid) {
      try {
        var response = await emailjs.send(
          'service_mqljrtd', // Replace with your EmailJS service ID
          'template_p0luniv', // Replace with your EmailJS template ID
          formData,
          'kLm2Is4LWSdkHFp7Z' // Replace with your EmailJS user ID
        );

        console.log('Email sent:', response);

        response = await emailjs.send(
          'service_mqljrtd', // Replace with your EmailJS service ID
          'template_ip6d8xw', // Replace with your EmailJS template ID
          formData,
          'kLm2Is4LWSdkHFp7Z' // Replace with your EmailJS user ID
        );

        console.log('Email sent:', response);

        // Reset form after successful submission
        setFormData({
          name: '',
          phoneNo: '',
          email: '',
          note: '',
        });
      } catch (error) {
        console.error('Error sending email:', error);
      }
    } else {
      setFormErrors(newErrors);
    }
  };


  return (
    <div className="container bg-dark text-light p-3 rounded mt-4" id="letusknow">
            <div className="row">
        <div className="col-md-6">
      <h2>Let Us Know</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className={`form-control ${formErrors.name && 'is-invalid'}`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {formErrors.name && (
            <div className="invalid-feedback">{formErrors.name}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">Contact No</label>
          <input
            type="tel"
            className={`form-control ${formErrors.phoneNo && 'is-invalid'}`}
            id="phoneNo"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            required
          />
          {formErrors.phoneNo && (
            <div className="invalid-feedback">{formErrors.phoneNo}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className={`form-control ${formErrors.email && 'is-invalid'}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {formErrors.email && (
            <div className="invalid-feedback">{formErrors.email}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="note">Note</label>
          <textarea
            className={`form-control ${formErrors.message && 'is-invalid'}`}
            id="note"
            name="note"
            rows="5"
            value={formData.note}
            onChange={handleChange}
            required
          ></textarea>
          {formErrors.message && (
            <div className="invalid-feedback">{formErrors.note}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
      <div className="col-md-6">
      <h2>Location</h2>
      <div class="embed-responsive embed-responsive-16by9">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.4881735446356!2d73.97092247385655!3d15.295682959684125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb17b1aac93a7%3A0x8357dad7417e5d16!2sFatorda%20Police%20Station!5e0!3m2!1sen!2sin!4v1702988854991!5m2!1sen!2sin"
    class="embed-responsive-item rounded" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
    </div>
    </div>
    </div>
  );
};

export default ContactForm1;
