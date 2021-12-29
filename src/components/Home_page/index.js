import Intro from "./Intro/Intro";
import Navigation from "../Navigation";
import "styles/Home/home_page.scss";
import { Row, Col, Container } from "react-bootstrap";
import SlidingCards from "./SlidingCards/SlidingCards";
import PersonalTimeline from "./TimeLine/Timeline";
import Skills from "./Skills/Skills";
import Contact from "components/Home_page/Contact/Contact.jsx";
import { useMediaQuery } from 'react-responsive'
import NavMobile from "components/Navigation/NavMobile";


function Home_page() {
  const IsDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 800px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const Mobile = useMediaQuery({ query: '(max-width: 800px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })


  return (
    
    <>
    {IsDesktopOrLaptop &&
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

            <Row id="about">
              <Container className="project-cards">
                <Row className="Cards">
                  <div className="header-padder">
                    <h1 className="Projects-header">About</h1>
                  </div>
                  <Col
                    xl={{ span: 6 }}
                    md={{ span: 6, offset: 0 }}
                    xs={{ span: 8, offset: 2 }}
                  >
                    <PersonalTimeline />
                  </Col>

                  <Col
                    xl={{ span: 6 }}
                    md={{ span: 6, offset: 0 }}
                    xs={{ span: 8, offset: 2 }}
                  >
                    <Skills />
                  </Col>
                </Row>
              </Container>
            </Row>
            {/* project cards */}
            <Row id="proj">
              <Container className="project-cards">
                <Row className="Cards">
                  <div className="header-padder">
                    <h1 className="Projects-header">Projects</h1>
                  </div>

                  <Col
                    xl={{ span: 8, offset: 2 }}
                    md={{ span: 8, offset: 2 }}
                    xs={{ span: 10, offset: 1 }}
                  >
                    <SlidingCards />
                  </Col>
                </Row>
              </Container>
            </Row>

            <Row id="contact">
              <Container className="project-cards">
                <Row className="Cards">
                  <div className="header-padder">
                    <h1 className="Projects-header">Contact</h1>
                  </div>

                  <Col
                    xl={{ span: 8, offset: 2 }}
                    md={{ span: 8, offset: 2 }}
                    xs={{ span: 8, offset: 2 }}
                  >
                    <Contact />
                  </Col>
                </Row>
              </Container>
            </Row>
          </Col>
        </Row>
      </Container>
}
{Mobile &&
      <Container className="home_page" fluid>
        <NavMobile/>
        {/* sidebar columns*/}
        <Row>
          <Col md={2} xl={2} xs={0} id="sidebar-wrapper">
            
          </Col>
          {/* particles wrapper */}
          <Col xl={10} md={10} xs={12} id="page-content-wrapper">
            <Row className="Cards">
              <Intro />
            </Row>

            <Row id="about">
              <Container className="project-cards">
                <Row className="Cards">
                  <div className="header-padder">
                    <h1 className="Projects-header">About</h1>
                  </div>
                  <Col
                    xl={{ span: 6 }}
                    md={{ span: 6, offset: 0 }}
                    xs={{ span: 12 }}
                  >
                    <PersonalTimeline />
                  </Col>

                  <Col
                    xl={{ span: 6 }}
                    md={{ span: 6, offset: 0 }}
                    xs={{ span: 12 }}
                  >
                    <Skills />
                  </Col>
                </Row>
              </Container>
            </Row>
            {/* project cards */}
            <Row id="proj">
              <Container className="project-cards">
                <Row className="Cards">
                  <div className="header-padder">
                    <h1 className="Projects-header">Projects</h1>
                  </div>

                  <Col
                    xl={{ span: 8, offset: 2 }}
                    md={{ span: 8, offset: 2 }}
                    xs={{ span: 10, offset: 1 }}
                  >
                    <SlidingCards />
                  </Col>
                </Row>
              </Container>
            </Row>

            <Row id="contact">
              <Container className="project-cards">
                <Row className="Cards">
                  <div className="header-padder">
                    <h1 className="Projects-header">Contact</h1>
                  </div>

                  <Col
                    xl={{ span: 8, offset: 2 }}
                    md={{ span: 8, offset: 2 }}
                    xs={{ span: 8, offset: 2 }}
                  >
                    <Contact />
                  </Col>
                </Row>
              </Container>
            </Row>
          </Col>
        </Row>
      </Container>
}


    </>
  );
}

export default Home_page;
