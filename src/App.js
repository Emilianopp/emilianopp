import React , {useState,useRef} from 'react';
import { Container, Navbar,Nav,NavDropdown, Form,Carousel,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './custom.css'
import Navigation from './Navigation';

import Footer from './Footer'
import BasicTimeline from './timeline';

import Animated_slides from  './Animation/Animation_slides.jsx';

import Animated_skills from  './Animation/Animation_skills';
import { HashRouter as Router,Route,Switch,Link,Redirect } from 'react-router-dom';
import Home_page from './Home_page';
import Projects from './projects';
import Resume from './Resume';
import  Stats from './stats'
import {Helmet} from "react-helmet";
const App = () => {

  return (
    <>
    <div className = "app">
    <Home_page/>
    {/* <Router basename="/" >
      <Switch>
     
     
     <Route exact path = "/home" component = {Home_page}></Route>
      <Route exact path = "/projects" component = {Projects}></Route>
      <Route exact path = "/resume" component = {Resume}></Route>
     

      <Redirect to = "/home" ></Redirect>
     </Switch>
    </Router> */}
    </div>
      </>
      
    
  )
}

export default App;
