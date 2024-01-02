import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Service from './components/Service';
import Product from './components/Product';
import About from './components/About';
import ContactForm from './components/ContactForm';
import ContactForm1 from './components/ContactForm1';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App(){
  const [showContactForm, setShowContactForm] = useState(false);

  // const bg={
  //   background: 'url("https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
  // };

  return (
<Router>
      <div className="App" >
        <Header title="CWC" />
        <Service />
        <Product setShowContactForm={setShowContactForm} />
        <Routes>
          <Route
            path="/demo"
            element={<ContactForm showContactForm={showContactForm} setShowContactForm={setShowContactForm} />}
          />
        </Routes>
        <About />
        <ContactForm1 />
        <Footer />
      </div>
    </Router>
  );
}

//ReactDOM.render(<ContactForm />, document.getElementById('root'));

export default App;
