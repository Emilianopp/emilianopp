import React , {useState,useRef} from 'react';
import { Container, Navbar,Nav,NavDropdown, Form,Carousel,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../custom.css'
import Navigation from '../Navigation';

import Footer from '../Footer'
import BasicTimeline from '../timeline';

import Animated_slides from  '../Animation/Animation_slides.jsx';

import Animated_skills from  '../Animation/Animation_skills';
import { Home } from '@material-ui/icons';

export default function Home_page(){

  return (
    
      <div class="cointainer-fluid">
        <Navigation />
        
        <Container fluid>
        <Animated_slides />
        <BasicTimeline/>
        <Animated_skills/>
      </Container>
        
        <Footer />
        
      </div>
      
    
  )
}


