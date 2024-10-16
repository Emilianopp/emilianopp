import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import content from "config/content.json";

function Contact() {
  return (
    <Container className="contact-container">
   
      <Row className="mb-4">
        <Col>
          <p className="contact-text">
            Thanks for taking a look!
<br/>
            If you enjoyed this website feel free to use the template which can be found on my <a className="pub-link" href="https://github.com/Emilianopp/emilianopp">GitHub</a>
          </p>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <div className="contact-text">
            <span className="contact-label">Email:</span>
            <a 
              className="contact-link email-link" 
              href={`mailto:${content.email}`}
            >
              {content.email}
            </a>
          </div>
        </Col>
      </Row>
      {content.contact.map((item, index) => (
        <Row key={index} className="mb-3">
          <Col>
            <div className="contact-item">
              <a 
                className="contact-link" 
                href={item.link}
              >
                {item.name}
              </a>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Contact;