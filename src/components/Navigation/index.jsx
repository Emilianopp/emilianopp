import {
  ProSidebar,
  SidebarHeader,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "styles/Navigation/navigation.scss";
import StickyBox from "react-sticky-box/dist/esnext";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import content from "config/content.json";
import elephant from "assets/elephant.svg"
export default function Navigation() {
  return (
    <StickyBox className="sticky-container">
      <Container className="sidebar">
        <Row className="header-side">



          <img  style={{widht : '100px!important'}} className = "elephant" src = {elephant}/>
        </Row>

        {content.Navigation.map((item) => {
         return( <>
            <Row className="links-side">
              <div className="text-inner">
                <a href={item.ref}>{item.name}</a>
              </div>
            </Row>

          </>);
        })}
      </Container>
    </StickyBox>
  );
}
