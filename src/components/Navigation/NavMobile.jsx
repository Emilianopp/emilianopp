
import { Container,Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas,Button } from "react-bootstrap";

import "styles/Navigation/navMobile.scss"
import content from "config/content.json"
function NavMobile() {
  return (
    <Navbar   expand={false} fixed="top"    className= "navbar custom-navba" >
    <Container fluid>
     
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav >
         
         
              {content.Navigation.map((item) => {
         return( <>
            
                < Nav.Link className = "border-left pl-2 ml-auto" style = {{color:'#fffc5cfa'}} href={item.ref}>{item.name}</Nav.Link>
            

          </>);
           })}
            
          </Nav>
        </Navbar.Collapse>

        
    </Container>
  </Navbar>

  );
}

export default NavMobile;
    // <Navbar   expand="md" fixed="top">
    //   <Container>
       
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
    //       <Nav className="ml-auto hidden-sm-up float-xs-right">
         
         
    //           {content.Navigation.map((item) => {
    //      return( <>
            
    //             < Nav.Link className="ml-auto hidden-sm-up float-xs-right" style = {{color: content.textColor}} href={item.ref}>{item.name}</Nav.Link>
            

    //       </>);
    //        })}
            
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>