import React from "react";
import content from "config/content";
import { Container, Col, Row } from "react-bootstrap";
import Particles from "react-tsparticles";
import particlesOptions from "config/particles.json";
import "styles/Home/Intro.scss";
import me from "assets/me.png";
import Typewriter from "typewriter-effect";
// wallpaper image removed — using CSS gradient background instead
class Intro extends React.Component {
  render() {
    let [im, student, developer, ml] = content.typewriter;
    return (
      <Container fluid className="intro">
        <Particles
          id="tsparticles"
          style={{
            position: "absolute",
            inset: 0,
            background: "transparent",
            zIndex: 0,
            pointerEvents: "none",
          }}
          // width="auto"
          height="100vh"
          width="100vw"
          options={particlesOptions}
        />
        {/* background image removed; SCSS provides gradient background */}

        {/* Compact contact badge in bottom-left */}
        <div className="contact-badge" aria-hidden={false}>
          <div className="contact-badge-inner">
            <a className="contact-email" href={`mailto:${content.email}`}>{content.email}</a>
            <div className="contact-links">
              {content.contact.map((c, i) => (
                <a key={i} className="contact-link" href={c.link} target="_blank" rel="noopener noreferrer">{c.name}</a>
              ))}
            </div>
          </div>
        </div>

        <Row xl={{ offset: 6 }}  className="img-row">
          <Col xl = {6} md = {12} sm={12}>
            <img className="intro-img" src={me} />
          </Col>
          <Col xl = {6} md = {12} sm = {12} className="type-col">
            <div className="wrap">
              <Row className="name-row">
                <h1 className="name">
                  <div>EMILIANO</div> <div className="lastname"> PENALOZA</div>
                </h1>
              </Row>

              <Row className="typewritter-row">
                <Typewriter
                  className="typewriter"
                  options={{
                    loop: true,
                    wrapperClassName: "typewriter",
                    cursorClassName: "cursor",
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(im)
                      .pauseFor(300)
                      .typeString(student)
                      .pauseFor(900)
                      .deleteChars(student.length)
                      .typeString(developer)
                      .pauseFor(900)
                      .deleteChars(developer.length)
                      .typeString(ml)
                      .pauseFor(1500)
                      .deleteAll()
                      .start();
                  }}
                />
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Intro;
