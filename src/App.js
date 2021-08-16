import React , {useState,useRef} from 'react';
import { Container, Navbar,Nav,NavDropdown, Form,Carousel,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './custom.css'
import Navigation from './Navigation';
import Main from './Main'
import Footer from './Footer'

const App = () => {

  return (
    
      <div class="cointainer-fluid">
        
        <Navigation />
        
        <Main />
        <Footer />
        
      </div>
      
    
  )
}

export default App;
