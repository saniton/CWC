import React from 'react';
//import { Link } from 'react-router-dom';

function Header({ title, setShowContactForm }) {

  const toggleContactForm = () => {
    setShowContactForm(prevState => !prevState); // Update the showContactForm state on button click
  };


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand ml-3 h2 text-" href="#">{title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
      <a className="nav-link" href="#about">About</a> {/* Link to the About section */}
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact">Contact</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Product
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="https://codetetris2000.web.app" target='_blank'>WatchMax</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Service
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#service">Web Development</a>
          <a class="dropdown-item" href="#service">Application Development</a>
          <a class="dropdown-item" href="#service">Software Maintainance</a>
          <a class="dropdown-item" href="#service">Lead Generation</a>
        </div>
      </li>
      <li>
          <a href="#letusknow">
            {/* Button to toggle Contact Form */}
            <button type="submit" className="btn btn-dark" onClick={toggleContactForm}>
              Let us know
            </button>
          </a>
        </li>
          </ul>
        </div>
      </nav>
      <div>
        <h1>Crafts With Code</h1>
        <h2>A Software Development Company</h2>
        <p>We bring your ideas to life!</p>
      </div>
    </div>
  )
}

export default Header;

