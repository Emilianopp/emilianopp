import { Container, Navbar, Nav, NavDropdown,Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import "../custom.css";
import './style.css'
import { useMediaQuery } from 'react-responsive'
export default function Footer() {
    return (
        <div className="bottom">  
        <Navbar color="dark" className="justify-content-center">
            <Container>
            <Nav className="justify-content-center" style={{ flex:2 }}>
            <Nav.Link href="#link">
                <div className='footer_links'>
                <a href="https://github.com/Emilianopp" className = 'test'> 
                <FontAwesomeIcon className = 'icons' icon={faGithub} size = '2x' ></FontAwesomeIcon>
                </a>
                <a href="https://www.linkedin.com/in/emilianopenaloza-19176b15b/" className = 'test'>
                <FontAwesomeIcon className = 'icons' icon={faLinkedin} size = '2x'></FontAwesomeIcon>
                </a>
                </div>
                </Nav.Link>
                </Nav>
            </Container>
            
        </Navbar>
    </div>
    )
}
