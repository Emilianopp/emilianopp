import React, { useState } from "react";
import "./styles.css";
import me from "./me.png";
import western from "./western.png";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Carousel,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMediaQuery } from "react-responsive";
import { Spring } from "react-spring";
export default function Slides() {


 

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1000 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1000 });

  return (
   
      
          <div className = "slides_container" >
            <Container>
              <Row className="justify-content-md-center" >
                <Col xs-={12} md={8} class="img-circle">
                  <div className="circle_me">
                    <img class="img-fluid rounded-circle img-max " src={me} />
                  </div>
                  {isTabletOrMobile && (
                    <Row>
                      <p className="introduction">Hi, my name is Emiliano</p>
                      <p className="introduction">
                        I'm a fourth year Data Science student{" "}
                      </p>
                      <p className="introduction">
                        I currently study at the University of Western Ontario{" "}
                      </p>
                      <p className="introduction">
                        This is a space where I showcase some of my work
                      </p>
                      <p className="introduction">Enjoy your stay!</p>
                    </Row>
                  )}
                  {isDesktopOrLaptop && (
                    <div className="intro_body">
                      <p className="introduction">Hi, my name is Emiliano</p>
                      <p className="introduction">
                        {" "}
                        I'm a fourth year Data Science student{" "}
                      </p>
                      <p className="introduction">
                        I currently study at the University of Western Ontario{" "}
                      </p>
                      <p className="introduction">
                        This is a space where I showcase some of my work
                      </p>
                      <p className="introduction">Enjoy your stay!</p>
                    </div>
                  )}
                </Col>
              </Row>
            </Container>
            <Container fluid></Container>
          </div>
        
     
   
  );
}
