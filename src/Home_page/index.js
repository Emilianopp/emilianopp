import Intro from "./Intro/Intro";
import React from "react";
import Navigation from "../Navigation";
import "styles/Home/home_page.scss";
import { Row, Col, Container } from "react-bootstrap";
import SlidingCards from "./SlidingCards/SlidingCards";
import ProjCard from "./SlidingCards/ProjCard";
function Home_page() {
  return (
    <>
      <Container className="home_page" fluid>
        <Row>
          <Col md={2} xl={2} id="sidebar-wrapper">
            <Navigation />
          </Col>

          <Col xl={10} md={10} id="page-content-wrapper">
            <Row>
              <Intro />
            </Row>
            <Row>
              <Container className="project-cards">
                <Row className = "Cards">
                  <Col  xl = {8} md = {8}>
                  

                    <SlidingCards />
                  </Col>
                 </Row>
                
              </Container>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home_page;
