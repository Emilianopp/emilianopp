import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../custom.css";
import "./styles.css";
import logo from "./elephant.png";
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
              <Nav.Link href="#link">Home</Nav.Link>
              <Nav.Link href="#link">Resume</Nav.Link>
              <Nav.Link className="border-left pl-2 ml-auto" href="#link">
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
