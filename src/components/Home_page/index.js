import Intro from "./Intro/Intro";
import Navigation from "../Navigation";
import "styles/Home/home_page.scss";
import { Row, Col, Container } from "react-bootstrap";
import SlidingCards from "./SlidingCards/SlidingCards";
import Contact from "components/Home_page/Contact/Contact.jsx";
import { useMediaQuery } from 'react-responsive'
import NavMobile from "components/Navigation/NavMobile";
import PublicationsComp from './bibtex/pubs';


function Home_page() {
  const IsDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1200px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const Mobile = useMediaQuery({ query: '(max-width: 1200px)' })
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
                  {/* {content.about.map((item) => 
                  {
                      return(<p className = "about-paragraph"> {item}</p>)

                  })} */}
                  <p className="about-paragraph">
                  
Hey I'm Emiliano a PhD student at Mila-Quebec/Université de Montréal, working under the supervision of <a href="http://www.cs.toronto.edu/~lcharlin/" className="about-href" target="_blank" rel="noopener noreferrer" >Laurent Charlin</a>
<p>  </p>
      Prior to Mila, I completed my MMath in Statistics at the University of Waterloo under the supervision of <a href="https://uwaterloo.ca/scholar/nstevens/home" className="about-href" target="_blank" rel="noopener noreferrer" >Nathaniel Stevens</a>
      <p>  </p>
     I obtained my Bachelors in Data Science from The University of Western Ontario, where I was a member of the <a href="https://thebal.ai/" className="about-href" target="_blank" rel="noopener noreferrer" >Banking Analytics Lab</a> led by Cristian Bravo 
      <p>  </p>
      Currently my research focus is on enhancing user autonomy within intelligent systems, with applications in recommender systems and language models.
      <p></p>
      My free time is mostly consumed by a good <a href = 'https://www.goodreads.com/user/show/157603205-emiliano-penaloza' className="about-href">book</a> and training for my next <a href = "https://youtu.be/wCxhuR65iW0" className="about-href">powerlifting</a> meet
      </p>

      <p></p>

      <p></p>
             
                  {/* <Col
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
                  </Col> */}
                </Row>
              </Container>
            </Row>





      <PublicationsComp/>
    



                
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
      <Container className="home_page">
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
                  
                  <p className="about-paragraph">
                  
                  Hey I'm Emiliano a PhD student at Mila-Quebec/Université de Montréal, working under the supervision of <a href="http://www.cs.toronto.edu/~lcharlin/" className="about-href" target="_blank" rel="noopener noreferrer" >Laurent Charlin</a>
<p>  </p>
      Prior to Mila, I completed my MMath in Statistics at the University of Waterloo under the supervision of <a href="https://uwaterloo.ca/scholar/nstevens/home" className="about-href" target="_blank" rel="noopener noreferrer" >Nathaniel Stevens</a>
      <p>  </p>
     I obtained my Bachelors in Data Science from The University of Western Ontario, where I was a member of the <a href="https://thebal.ai/" className="about-href" target="_blank" rel="noopener noreferrer" >Banking Analytics Lab</a> led by Cristian Bravo 
      <p>  </p>
      While most of my work has focused on dynamic graph learning, I am broadly interested in solving real world problems through the use of intelligent systems, with a particular interest in recommendation systems and generative modeling
      <p></p>
      My free time is mostly consumed by a good <a href = 'https://www.goodreads.com/user/show/157603205-emiliano-penaloza' className="about-href">book</a> and training for my next <a href = "https://youtu.be/wCxhuR65iW0" className="about-href">powerlifting</a> meet
                        </p>
                        <p></p>
                        <p></p>
                  {/* <Col
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
                  </Col> */}
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


           
            <PublicationsComp/>



            
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
