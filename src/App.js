import React , {useState,useRef} from 'react';
import { Container, Navbar,Nav,NavDropdown, Form,Carousel,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './custom.css'
import Navigation from './Navigation';

import { HashRouter as Router,Route,Switch,Link,Redirect } from 'react-router-dom';
import Home_page from './Home_page';

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */


const App = () => {

  return (
    <>
    <div className = "app">
    <Router  basename='/'>
      <Switch>
     
     
     <Route exact path = "/home" component = {Home_page}></Route>
      

      <Redirect to = "/home" ></Redirect>
     </Switch>
    </Router>
    </div>
      </>
      
    
  )
}

export default App;
