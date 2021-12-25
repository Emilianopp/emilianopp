import Intro from "./Intro/Intro";

import Navigation from "../Navigation";
import "styles/Home/home_page.scss";
import { Row, Col, Container } from "react-bootstrap";
import SlidingCards from "./SlidingCards/SlidingCards";


import PersonalTimeline from "./TimeLine/Timeline";
import Skills from "./Skills/Skills";
function Home_page() {
  return (
    <>
      <Container className="home_page" fluid>
        {/* sidebar columns*/}
        <Row>
          <Col md={2} xl={2} xs={0} id="sidebar-wrapper">
            <Navigation />
          </Col>
          {/* particles wrapper */}
          <Col xl={10} md={10} xs={12} id="page-content-wrapper">
            <Row>
              <Intro />
            </Row>
            {/* project cards */}
            <Row>
              <Container className="project-cards">
                <Row className="Cards">
                  <Col xl={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }}>
                    <SlidingCards />
                  </Col>
                </Row>
              </Container>
            </Row>

            <Row>
              <Container className="project-cards">
                <Row className="Cards">
                  <Col xl={{ span: 6 }} md={{ span: 6, offset: 0 }} xs={12}>
                    <PersonalTimeline />
                  </Col>

                  <Col xl={{ span: 6 }} md={{ span: 6, offset: 0 }} xs={12}>
                    <Skills />
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
