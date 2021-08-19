import React from 'react'
import { Container,Row } from 'react-bootstrap'
import './body.scss'
import Project_cards from './Project_cards'
import r_python from './Project_cards/card_logos/R-python.png'


// for markdown imports always use root path ./markdown/file

export default function Body() {
    return (
        <Container className = "main_cont">
            <Row> <h2> Projects</h2></Row>
            <Row> 
            {Project_cards(r_python,'RNA Sequence Pipeline','./markdown/test.md')}
            {Project_cards(r_python,'Pygame Space Invaders Clone','./markdown/test.md')}
            {Project_cards(r_python,'Recreation Centre Traffic Bot','./markdown/test.md')} 
             </Row>
             <Row>
             {Project_cards(r_python,'Western Python Workshop','./markdown/test.md')}
             {Project_cards(r_python,'Student Mental Health Analysis','./markdown/test.md')}
             {Project_cards(r_python,'Personal Site','./markdown/test.md')}

             </Row>
        </Container>
    )
}
