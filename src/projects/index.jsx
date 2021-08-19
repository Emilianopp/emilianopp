import React from 'react'
import { BrowserRouter as Router,Route,Switch,Link,Redirect } from 'react-router-dom';
import Navigation from '../Navigation'
import { Container, Navbar,Nav,NavDropdown, Form,Carousel,Row,Col } from 'react-bootstrap';
import Body from './body'

export default function Projects() {
    return (
        <Container fluid>
           <Navigation />
           <Body />
            </Container>
    )
}
