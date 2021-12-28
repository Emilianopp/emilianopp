import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import content from "config/content.json";
function Contact() {
  return (
    <Container>
      <Row>
        <div
          className="contact-line"
          style={{ color: content.textColor, fontSize: "23px" , paddingTop: "20px",paddingBottom: "20px"}}
        >
          If you enjoyed this website and/or want to collaborate please reach
          out!
        </div>
      </Row>
      <Row>
        <Col md={3}>
          <div
            style={{
              color: content.textColor,
              fontSize: "20px",
              display: "flex",
            }}
          >
            Email:
            <u>
              {" "}
              <a
                style={{ paddingLeft: "10px" }}
                href={`  mailto:${content.email}`}
              >
                {content.email}
              </a>
            </u>
          </div>
        </Col>
        <Col md={3} style={{ color: "#fffc5cfa", fontSize: "20px" }}></Col>
      </Row>
      {content.contact.map((item) => {
        return (
          <Row>
            <Col className="contact-line" md={3}>
              <u><a
                style={{ fontSize: "20px" }}
                href={item.link}
              >
                {" "}
                {item.name}
              </a></u>
            </Col>
            <Col md={3}></Col>
          </Row>
        );
      })}
    </Container>
  );
}

export default Contact;
