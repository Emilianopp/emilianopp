import React, { useState } from "react";
import "./styles.css";
import me from "./me.png";
import western from "./western.png";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Carousel,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from './Skills'
import Slides from "./slides";
import  Body_animation  from './Body_animation';

export default function Main() {
  return (
    <div className="text_body">
      
     <Container fluid>
      <Body_animation />
        </Container>
      
    </div>
  );
}
