import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../custom.css";
import "./styles.css";
import logo from "../media/elephant.png";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

export default function Navigation() {
  return (
    <div className="Navigation">
      <Navbar bg="light" expand="lg">
        <Container className="Header">
          <Navbar.Brand href="#home">
            <img src={logo} className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/home" style={{ textDecoration: "none" }}>
                <Nav.Link href="#link">Home</Nav.Link>
              </Link>
              <Nav.Link href="#link">Resume</Nav.Link>
              <Link to="/projects" style={{ textDecoration: "none" }}>
              <Nav.Link className="border-left pl-2 ml-auto" href="#link">
                Projects
              </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
