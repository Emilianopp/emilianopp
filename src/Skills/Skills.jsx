import React, { useState, useRef } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Carousel,
  Row,
  Col,
  Tooltip,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Disclaimer_tools from "../Disclaimer/disclaimer_tools"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faStar } from "@fortawesome/free-brands-svg-icons";
import "./styles.css";

const make_stars = (stars) => {
  let card = [];

  for (var i = 0; i < stars; i++) {
    card.push(<span class="fa fa-star checked"></span>);
  }

  for (var i = 0; i < 5 - stars; i++) {
    card.push(<span class="fa fa-star "></span>);
  }

  return card;
};
const renderTooltip = (description, tool) => (
  <Popover id="popover-basic">
    <Popover.Header as="h3">{tool}</Popover.Header>
    <Popover.Body>{description}</Popover.Body>
  </Popover>
);
const Create_icon = (icon, stars, description, tool) => {
  return (
    <Col xs={6} lg='auto'>
      <div className="icon_skills">
        <OverlayTrigger
          placement="top"
          delay={{ show: 100, hide: 100 }}
          overlay={renderTooltip(description, tool)}
        >
          <img className="icons" src={icon} />
        </OverlayTrigger>
      </div>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="Stars"> {make_stars(stars)} </div>
    </Col>
  );
};

export default function Skills() {
  return (
    <div className="Skills_body">
      <Container  >
      <Col><h1 className="tech_skills"> Technical Skills <Disclaimer_tools className = 'icon_disc' /></h1></Col>

        <Row className='justify-content-center'>
       
          {/* =======================================================================================
              ===================================== GENERAL PURPOSE LANGUAGES =======================
              =======================================================================================*/}
          <Col xs={12} lg={4}>
          <h4 className="languages">Programming Languages</h4>
            <Row className='justify-content-center'>
              {/* python */}
              {Create_icon(
                "https://img.icons8.com/color/144/000000/python--v2.png",
                5,
                "Python is my most used language. I have used python for Web-scraping, Game Development, Statistical analysis, Machine-Learning software as well as general purpose tasks.",
                "Python"
              )}
              {/* Excel VBA */}
              {Create_icon(
                "https://www.thoughtco.com/thmb/HiMRu3Z0WMOGo8YUaSJ_y4PF1H0=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Microsoft_Excel_2013_logo.svg-56a9d18e3df78cf772aac9c6.jpg",
                5,
                "I’ve used Excel and VBA for years. I am very comfortable with the software functionalities. My biggest accomplishment with this tool was decreasing the runtime of a Risk Profile generator from 4-5 hours to under a minute.",
                "Excel VBA"
              )}
            </Row>
            <Row className='justify-content-center'>
              {/* R */}
              {Create_icon(
                "https://www.r-project.org/logo/Rlogo.svg",
                4,
                "During my schooling I have worked with R on various projects and tasks. I am very familiar with using R to produce sound statistical analysis as well as visual analytics.",
                "R"
              )}
              {/* Bash */}
              {Create_icon(
                "https://www.pikpng.com/pngl/b/537-5376074_blog-logo-bash-script-logo-clipart.png",
                3,
                "During my co-op at Sunlife as a Devops Engineer I developed skills for bash scripting. I’ve used bash to build multi-step pipelines that communicate with various software over varying conditions. ",
                "Bash/Shell"
              )}
            </Row>
            <Row className='justify-content-center'>
              {/* Java */}
              {Create_icon(
                "https://www.vectorlogo.zone/logos/java/java-icon.svg",
                3,
                "Throughout my schooling Java has been the primary language used within my CS classes. I have built varying data structures with the use of java as well as learnt the fundamentals of programming using this language. ",
                "Java"
              )}
              {/* Javascript */}
              {Create_icon(
                "https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png",
                2,
                "I know the basics of Java Script but have issues calling myself experienced. I used the React framework to build this website and I believe it pushed my abilities as a developer in an area that is not my expertise.",
                "JavaScript"
              )}
            </Row>
          </Col>
          {/* =======================================================================================
              ===================================== SOFTWARE TOOLS =====================================
              =======================================================================================*/}
          <Col xs = {12} lg={4}>
            <h4 className="languages">
              DevOps Tools
            </h4>
            <Row className='justify-content-center'>
              {/* Jenkins */}
              {Create_icon(
                "https://www.jenkins.io/images/logos/guadalajara/guadalajara256.png",
                4,
                "I used Jenkins during my time at Sunlife to build our SQL pipeline. Ive used Jenkins to build general Jenkins jobs as well as scripted Groovy pipeline. I’ve used Jenkins in my personal endeavours as well as the workplace.",
                "Jenkins"
              )}

              {/* Jira */}
              {Create_icon(
                "https://symbols.getvecta.com/stencil_85/33_jira-icon.6a60be29f8.png",
                4,
                "I used Jira REST API to track Jenkins pipeline procedures as well as document changes done to our databases. Furthermore, I used Jira to track my work within an Agile environment. ",
                "JIra"
              )}
              
              
              </Row>

              <Row className='justify-content-center'>
              {/* Artifactory */}
              {Create_icon(
                "https://seeklogo.com/images/J/jfrog-logo-BECF90A154-seeklogo.com.png",
                3,
                "I used artifactory during my time at Sunlife. We used it to generally track logs as well as maintain scripts. I mostly used it in conjugation with its REST API to help us execute various tasks.",
                "Artifactory"
              )}
              {/* Git */}
              {Create_icon(
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png",
                3,
                "I’ve used Git since my time at Sunlife and since then I have learnt to truly appreciate it. I’ve used git in the workplace and my personal projects and have developed to be fairly proficient with it.",
                "Git"
              )}
              
              </Row>
              <Row className='justify-content-center'>
              {/* Ansible */}
              {Create_icon(
                "https://code.benco.io/icon-collection/azure-docs/ansible.svg",
                2,
                "I used Ansible to communicate with SQL servers as well as Service Now. Although I did create my own playbooks and am comfortable with the basics, I believe I still have a lot to learn to call myself proficient with this tool.",

                "Ansible"
              )}
            
            </Row>
          </Col>
            {/* =======================================================================================
              ===================================== STATISTICAL SKILLS =====================================
              =======================================================================================*/}
          <Col xs={12} lg={4}>
          <h4 className="languages">
            Statistical Skills
          </h4>
          <Row className='justify-content-center'>
            {/* Inferential */}
            {Create_icon(
              "https://static.thenounproject.com/png/1425410-200.png",
              4,
              "I’m fairly well versed in inferential statistics. Favourite personal experience; Used Lasso & Ridge regression to discover what affects Western student mental health using hand collected data (see projects tab). ",
              "Inferential Statistics"
            )}
            ,{/* Predictive Analytics */}
            {Create_icon(
              "https://cdn.iconscout.com/icon/premium/png-512-thumb/regression-analysis-1516579-1286176.png",
              4,
              "Predictive Analytics is my favourite and most used tool. I’m familiar with many models such as; regression,decision trees, glms, neural networks. My favourite use was creating a prediction bot of the Western recreation centre traffic (see projects).",
              "Predictive Analytics"
            )}
            </Row>
            <Row className='justify-content-center'>
            {/* Artifactory */}
            {Create_icon(
              "https://cdn.iconscout.com/icon/premium/png-512-thumb/marketing-analytics-1-1055567.png",
              3,
              "I am currently working on better developing my visual analytics skills. Checkout my Gallery to see some of my work! ",
              "Visual Analytics"
            )}
            
           
          </Row>
          
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}
