import React from 'react'
import { Link } from 'react-router-dom';
//import React, { useState } from 'react';
//import ContactForm1 from './ContactForm1';


const Product = ({ setShowContactForm }) => {
    const toggleContactForm = () => {
        setShowContactForm(prevState => !prevState); // Update the showContactForm state on button click
      };
  return (
    // <div>
      
    //   {!showForm ? (
    //     <button type="button" className="btn btn-dark" onClick={handleButtonClick}>
    //       Request Demo
    //     </button>
    //   ) : (
    //     <ContactForm1 />
    //   )}
    // </div>
    <div id="product"><h2>Product</h2>
    <p>"As digitalization of courses helps many students to learn and gain knowledge online. It has become a challenge for institutions to provide online courses.<br></br> Well we are here to help you, Our flagship product provides a learning platform for Students, helping institutions in digitalization of their courses"</p>
    <Link to="/demo"><button type="button" className="btn btn-dark" onClick={toggleContactForm}>
     Request Demo</button></Link></div>
    
  )
}

export default Product
