import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import "styles/Navigation/navMobile.scss"
import content from "config/content.json"
function NavMobile() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar
      expand={false}
      fixed="top"
      variant="dark"
      expanded={expanded}
      onToggle={setExpanded}
      className={`nav-mobile ${expanded ? "open" : ""}`}
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {content.Navigation.map((item) => (
              <Nav.Link
                key={item.name}
                className="nav-mobile-link"
                href={item.ref}
                onClick={() => setExpanded(false)}
              >
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMobile;
