import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Service.css'; // Create a CSS file for Service component styles

const Service = () => {
  const cardStyle = {
    minWidth: '200px', // Adjust the value to your desired minimum width
  };
  return (
    <div className='container' id="service">
      <h2>Services</h2>
      <h5>We offer a range of services including:</h5>
      <div className="card-container d-flex">
        {/* Card for Application Development */}
        <Card className="card" style={cardStyle}>
          <Card.Body>
            <Card.Title>Application Development</Card.Title>
            <Card.Text>
              "A Complete solution for designing and developing of any Apps. Innovate, Create, Connect: Empowering the Digital World through App Development."
            </Card.Text>
          </Card.Body>
            <Card.Footer>
        <Button variant="primary">Learn More</Button>
      </Card.Footer>
        </Card>

        {/* Card for Web Development */}
        <Card className="card" style={cardStyle}>
          <Card.Body>
            <Card.Title>Web Development</Card.Title>
            <Card.Text>
              "Transform Your Ideas into a Captivating Digital Experience with Expert Website Development."
            </Card.Text>
          </Card.Body>
            <Card.Footer>
        <Button variant="primary">Learn More</Button>
      </Card.Footer>
        </Card>

        {/* Card for Software Maintenance */}
        <Card className="card" style={cardStyle}>
          <Card.Body>
            <Card.Title>Software Maintenance</Card.Title>
            <Card.Text>
              "We undertake the process of modifying, updating, and managing software applications after their delivery to correct faults, improve performance, or adapt to changes in the environment."
            </Card.Text>
          </Card.Body>
            <Card.Footer>
        <Button variant="primary">Learn More</Button>
      </Card.Footer>
        </Card>

        {/* Card for Lead Generation (Data Mining) */}
        <Card className="card" style={cardStyle}>
          <Card.Body>
            <Card.Title>Lead Generation (Data Mining)</Card.Title>
            <Card.Text>
              "Data mining is the process of discovering patterns, correlations, anomalies, and other valuable insights from large datasets using various techniques, algorithms, and computational methods."
            </Card.Text>
          </Card.Body>
            <Card.Footer>
        <Button variant="primary">Learn More</Button>
      </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default Service;
