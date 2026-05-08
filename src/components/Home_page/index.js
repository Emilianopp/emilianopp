import Intro from "./Intro/Intro";
import Navigation from "../Navigation";
import "styles/Home/home_page.scss";
import { Row, Col, Container } from "react-bootstrap";
import SlidingCards from "./SlidingCards/SlidingCards";
import Contact from "components/Home_page/Contact/Contact.jsx";
import { useMediaQuery } from 'react-responsive'
import NavMobile from "components/Navigation/NavMobile";
import PublicationsComp from './bibtex/pubs';
import { Helmet } from 'react-helmet-async';
import blogImg from 'assets/blog.png';


function Home_page() {
  const IsDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1300px)'
  })
  const Mobile = useMediaQuery({ query: '(max-width: 1300px)' })
  // unused media queries removed to avoid lint warnings


  return (
    
    <>
    <Helmet>
      <title>Emiliano Penaloza – AI Researcher | PhD at Université de Montréal</title>
      <meta name="description" content="PhD researcher at Mila-Quebec/Université de Montréal focusing on AI alignment, recommender systems, and deep learning. Explore my research publications and projects." />
      
      {/* Additional metadata for better Google search indexing */}
      <meta name="author" content="Emiliano Penaloza" />
      <meta name="keywords" content="Hey I'm Emiliano PhD student at Mila - Quebec" />
      
      {/* Schema.org structured data for better search results */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Emiliano Penaloza",
          "url": "https://emilianopp.github.io/",
          "image": "https://emilianopp.github.io/me.png",
          "jobTitle": "PhD Researcher",
          "worksFor": {
            "@type": "Organization",
            "name": "Université de Montréal and Mila"
          },
          "description": "Hey I'm Emiliano PhD student at Mila - Quebec",
          "knowsAbout": ["Recommender Systems", "Deep Learning", "AI Alignment", "NLP", "Machine Learning"]
        }
      `}</script>
    </Helmet>
    
    {IsDesktopOrLaptop &&
      <Container className="home_page" fluid>
        {/* sidebar columns*/}
        <Row className="flex-nowrap">
          <Col id="sidebar-wrapper" style={{maxWidth: '180px', minWidth: '150px', flex: '0 0 180px'}}>
            <Navigation />
          </Col>
          {/* particles wrapper */}
          <Col id="page-content-wrapper" style={{flex: '1 1 0', minWidth: 0}}>

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
                  
 Hey, I'm Emiliano, a PhD student at Mila-Quebec/Universit&eacute; de Montr&eacute;al, working under the supervision of <a href="http://www.cs.toronto.edu/~lcharlin/" className="about-href" target="_blank" rel="noopener noreferrer">Laurent Charlin</a>. I am currently an intern at Microsoft Research working on post-training for coding agents with <a href="https://scholar.google.com/citations?user=fuvIITUAAAAJ&hl=en" className="about-href" target="_blank" rel="noopener noreferrer">Lucas Caccia</a>. Previously I was a visiting researcher at ServiceNow Montreal working with <a href="https://optimass.github.io/" className="about-href" target="_blank" rel="noopener noreferrer">Massimo Caccia</a> on LLM reasoning applied to agentic tasks.
<p>  </p>
      My work focuses on long-horizon LLM post-training (RL/Distillation) applied to tool-using domains (e.g. computer use, coding, service tasks). I am also broadly interested in leveraging the unique properties of language models to design better algorithms (e.g. <a href="https://arxiv.org/abs/2602.04942" className="about-href" target="_blank" rel="noopener noreferrer">Privileged Information Distillation</a>) and improve user alignment (e.g. <a href="https://arxiv.org/abs/2410.19302" className="about-href" target="_blank" rel="noopener noreferrer">TEARS</a>).
      <p>  </p>
      I am thankful that my research is funded by the NSERC PGS-D award.
      <p>  </p>
      My free time is mostly consumed by a good <a href="https://www.goodreads.com/user/show/157603205-emiliano-penaloza" className="about-href" target="_blank" rel="noopener noreferrer">book</a> and training for my next <a href="https://youtu.be/wCxhuR65iW0" className="about-href" target="_blank" rel="noopener noreferrer">powerlifting</a> meet.
      </p>
             
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





            <Row id="blog">
              <Container className="project-cards">
                <Row className="Cards">
                  <div className="header-padder">
                    <h1 className="Projects-header">Blog Posts</h1>
                  </div>
                  <Col xl={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }}>
                    <a href="https://emilianopp.github.io/Privileged-Information-Distillation-and-Self-Distillation/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                      <div className="pub-details" style={{cursor: 'pointer'}}>
                        <h3 className="pub-section" style={{color: '#F5F5F5', marginBottom: '1rem'}}>Understanding Self-Distillation and Privileged Information Distillation</h3>
                        <div className="pub-image-container">
                          <img src={blogImg} alt="Self-Distillation and Privileged Information Distillation" className="pub-image" />
                        </div>
                      </div>
                    </a>
                  </Col>
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
 
            {/* Contact moved into a compact badge in the intro panel */}
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
                  
                  Hey, I'm Emiliano, a PhD student at Mila-Quebec/Universit&eacute; de Montr&eacute;al, working under the supervision of <a href="http://www.cs.toronto.edu/~lcharlin/" className="about-href" target="_blank" rel="noopener noreferrer">Laurent Charlin</a>. I am currently an intern at Microsoft Research working on post-training for coding agents with <a href="https://scholar.google.com/citations?user=fuvIITUAAAAJ&hl=en" className="about-href" target="_blank" rel="noopener noreferrer">Lucas Caccia</a>. Previously I was a visiting researcher at ServiceNow Montreal working with <a href="https://optimass.github.io/" className="about-href" target="_blank" rel="noopener noreferrer">Massimo Caccia</a> on LLM reasoning applied to agentic tasks.
<p>  </p>
      My work focuses on long-horizon LLM post-training (RL/Distillation) applied to tool-using domains (e.g. computer use, coding, service tasks). I am also broadly interested in leveraging the unique properties of language models to design better algorithms (e.g. <a href="https://arxiv.org/abs/2602.04942" className="about-href" target="_blank" rel="noopener noreferrer">Privileged Information Distillation</a>) and improve user alignment (e.g. <a href="https://arxiv.org/abs/2410.19302" className="about-href" target="_blank" rel="noopener noreferrer">TEARS</a>).
      <p>  </p>
      I am thankful that my research is funded by the NSERC PGS-D award.
      <p>  </p>
      My free time is mostly consumed by a good <a href="https://www.goodreads.com/user/show/157603205-emiliano-penaloza" className="about-href" target="_blank" rel="noopener noreferrer">book</a> and training for my next <a href="https://youtu.be/wCxhuR65iW0" className="about-href" target="_blank" rel="noopener noreferrer">powerlifting</a> meet.
      </p>
                </Row>
              </Container>
            </Row>
            
            <Row id="blog">
              <Container className="project-cards">
                <Row className="Cards">
                  <div className="header-padder">
                    <h1 className="Projects-header">Blog Posts</h1>
                  </div>
                  <Col xl={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }}>
                    <a href="https://emilianopp.github.io/Privileged-Information-Distillation-and-Self-Distillation/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                      <div className="pub-details" style={{cursor: 'pointer'}}>
                        <h3 className="pub-section" style={{color: '#F5F5F5', marginBottom: '1rem'}}>Understanding Self-Distillation and Privileged Information Distillation</h3>
                        <div className="pub-image-container">
                          <img src={blogImg} alt="Self-Distillation and Privileged Information Distillation" className="pub-image" />
                        </div>
                      </div>
                    </a>
                  </Col>
                </Row>
              </Container>
            </Row>

            {/* Publications */}
            <PublicationsComp/>

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
            
            {/* Contact moved into a compact badge in the intro panel */}
          </Col>
        </Row>
      </Container>
}


    </>
  );
}
export default Home_page;
