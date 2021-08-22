import { Container } from '@material-ui/core'
import React from 'react'
import Navigation from '../Navigation'
import Markdown_parser from '../projects/body/Project_cards/markdown_parser'
import '../markdown/resume.scss'
import Resume_html from './resume'
import "./aos.css";
import Aos from "aos";
export default function Resume() {
    return (
        <>
        <Navigation />
        <Container fluid className = 'container_resume'>
            
            <Resume_html  />
        </Container>
        </>
    )
}
