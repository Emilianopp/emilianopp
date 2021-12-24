import React from "react";
import content from "config/content";
import { Container, Col, Row } from "react-bootstrap";
import Particles from "react-tsparticles";
import particlesOptions from "config/particles.json";
import "styles/Home/Intro.scss";
import me from "assets/me.png";
import Typewriter from "typewriter-effect";
class Intro extends React.Component {
  render() {
    let [im, student, developer, ml] = content.typewriter;
    return (
      <Container fluid className="intro">
        <Particles
          id="tsparticles"
          style={{
            position: "absolute",
          }}
          width="100wh"
          height="100vh"
          options={particlesOptions}
        />
  
        <Row xl = {{offset : 6}} className="img-row">
          <img className="intro-img" src={me} />
          <div>
            test
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
            </div>
        </Row>
      

      </Container>
    );
  }
}

export default Intro;
