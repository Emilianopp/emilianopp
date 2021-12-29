import React from "react";
import content from "config/content";
import { Container, Col, Row } from "react-bootstrap";
import Particles from "react-tsparticles";
import particlesOptions from "config/particles.json";
import "styles/Home/Intro.scss";
import me from "assets/me.png";
import Typewriter from "typewriter-effect";
import background from "assets/wallpaper.jpg";
class Intro extends React.Component {
  render() {
    let [im, student, developer, ml] = content.typewriter;
    return (
      <Container fluid className="intro">
        <Particles
          id="tsparticles"
          style={{
            position: "absolute",
            backgroundImage: background,
          }}
          width="auto"
          height="100vh"
          options={particlesOptions}
        />
        <img
          src={background}
          style={{
            zIndex: 0,
            position: "absolute",
            opacity: ".2",
            height: "100vh",
            width: '100vw',
          }}
        />

        <Row xl={{ offset: 6 }} className="img-row">
          <Col md = {6} xs={12}>
            <img className="intro-img" src={me} />
          </Col>
          <Col md = {6} xs = {12} className="type-col">
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
