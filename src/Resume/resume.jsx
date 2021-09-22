
import React from 'react'
import { Col,Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import "./resume.scss"
export default function Resume_html() {
    return (
        <>
<Container className = "resume_container">
<Row>
    <Col  className = "header_col">
    <div className = "Header_name"> <span>Emiliano Penaloza</span></div>
    </Col>


</Row>


{/* EDUCATION ===================================== */}
    <Row className = "resume_row">      
    <h2> Education </h2>
    <Col lg = {10} > Honours Data Science, Western University 
            </Col>
                <Col lg = {2} className = "date_tag"> 
            </Col>
   
    <Col lg ={10}>
    <ul>

        
    <li>
    GPA: 3.7
    </li>
    </ul>
    </Col>
    <Col lg = {2} className = "date_tag">
    Sept 2017 – Present
    </Col >
    </Row>



    
{/* Technical Skills ===================================== */}


    <Row className = "resume_row">
        <Col lg = {10}>
        
            <dl >

            <h2>Technical Skills </h2>

            <ul>
        
            <li> Significant programming experience with; Python, R, VBA, Java, JavaScript, HTML/CSS </li>
           
        
        
            <li> Workplace experience with DevOps tools such as; Jenkins, Git, Jira, Ansible, Artifactory</li>
           
       

        
            <li> Substantial proficiency of Statistical concepts such as; descriptive and inferential statistics, model building and validation, statistical significance as well as sampling methodology
            </li>
            </ul>
            </dl>
            </Col>
    
           

    </Row>
{/*PERSONAL PROJECTS ================================================ */}

    <Row className = "resume_row">


        <Col lg = {10}>
        
            <dl > 
            <h2>Personal Projects</h2>
        
            <ul>
        
            <li>Used a Recurrent Neural Network to accurately model Western recreation centre's hourly traffic data </li>
           
        
        
            <li> Collected Student volunteered data to obtain insight on the biggest factors impacting student mental health</li>
           
       

        
            <li>  Built a personalized arcade game within Python using Space Invaders as the base concept
            </li>
            </ul>
            </dl>
            </Col>
    
           

    </Row>



{/* WORK EXPIRIENCE ====================== */}
    
        <Row className = "resume_row">
            <h2 className="work"> Work Experience </h2>
         {/* LAB ====================================================== */}

    <Col lg = {10} > Data Science Research Intern - Western University, London On
            </Col>
                <Col lg = {2} className = "date_tag"> May 2021 – Present
            </Col>
            <Col lg = {10}>
            <ul>
                <li className="list_bullet">
                Used python's Snakemake to create an RNA sequence clustering pipeline 
                </li>
                <li>
                Pipeline was used to compare RNA sequence clustering methodologies such as; Giniclust,Backspin,Seurat and SC3  
                </li>
                <li>
                Final comparison and analysis was published as a Master student's thesis 
                </li>
                <li>
                Published developed software as an R package used to Preprocess, Cluster, Visualize and Compare RNA sequence data 
                </li>
             

            </ul>
        </Col>    
       

{/* DevOPS ====================================================== */}

            <Col lg = {10} > DevOps Engineer CO-OP - Sun Life, Toronto On  
            </Col>
                <Col lg = {2} className = "date_tag"> Jan 2021 – April 2021
            </Col>
            <Col lg = {10}>
            <ul>
                <li className="list_bullet">
                Built a scripted Jenkins Pipeline that ensured safe implementation of changes to our Postgres and Miscrosoft SQL databases
                </li>
                <li>
                Worked alongside various organization managers to structure a Pipeline best suited for their independent needs 
                </li>
                <li>
                Used Jira, Git, SNOW, Ansible and Artifactory REST API to implement changes as well as document Pipeline results and executions
                </li>
                <li>
                Educated various organization members on updated workflow procedures by giving a general presentation and one-on-one demos 
                </li>
             

            </ul>
            </Col>
              
           
 {/* Actuarial ======================== */}
 <Col lg = {10} > Actuarial ALM CO-OP - Sun Life Financial, Waterloo ON  
            </Col>
                <Col lg = {2} className = "date_tag"> May 2020 – Dec 2020
            </Col>
            <Col lg = {10}>
            <ul>
                <li className="list_bullet">
                    Integrated new financial procedures, forecasts and risk mitigation procedures within the new  IFRS- 17 guidelines
                    
                </li>
                <li>
                    Built analytical infrastructure with the purpose of enhancing reproducibility and efficiency
                    
                </li>
                <li>
                    Used various statistical and financial techniques to quantify and mitigate risk
                    
                </li>
                <li>
                    Documented various processes in a clear and concise matter to be used by various teams within Sun Life
                    
                </li>

            </ul>
            </Col>
            </Row>

        {/* SPANISH ====================================================== */}
    <Row>
            <Col lg = {10} > Beginners Spanish Conversation Teaching Assistant - Western University, London On 
            </Col>
                <Col lg = {2} className = "date_tag"> Sept 2018 – Dec 2018
            </Col>
            <Col lg = {10}>
            <ul>
                <li className="list_bullet">
                Implemented lesson plans independently for classrooms of over 25 students
                    
                </li>
                <li>
                Assisted individual students and took notice of students individual learning style
                    
                </li>
             

            </ul>
            </Col>
            </Row>
        <Row>
            {/* ++++++++++++++++++++++++++++CLOSING DIV BELOW++++++++++++++++++++++++++++++++++++ */}
    </Row>

{/* EDUCATION ===================================== */}
<Row >      
    <h2> Leadership and Extra-Curricular </h2>
    </Row>  
    <Row className = "resume_row">
    <Col lg = {10} > Project Manager, Western Artificial Intelligence
            </Col>
                <Col lg = {2} className = "date_tag">   Sept 2019 – May 2020
            </Col>

    <Col lg ={10}>
        <ul>
    <li>
    Responsible for educating multiple students on various statistical and programming concepts
    </li>
    <li>
    Organized regular group meetings in order to assign different tasks to team members that would suit their interests
    </li>
    <li>
    Helped students build a machine learning model with the purpose of predicting future price of a stock
    </li>
    </ul>
    </Col>

    </Row>

<Row className = "resume_row">
<Col lg = {10} >  Vice- President Communications and Events, Western Strength
            </Col>
                <Col lg = {2} className = "date_tag">    Sept 2018 – May 2020 
            </Col>

            <Col lg ={10}>
                   
                        <ul>
                    <li>
                    Provided 200+ students information about current events through social media platforms
                    </li>
                    <li>
                    Organized the annual Western Collegiate Classic being the biggest student ran athletic event at Western
                    </li>
                    </ul>
            </Col>
            <Col lg = {2} className = "date_tag">
                    
            </Col >
</Row>
<Row className = "resume_row">
            
             <Col lg = {10} >   Statistical and Actuarial Science Python Workshop 
            </Col>
                <Col lg = {2} className = "date_tag">    Feb 2021
            </Col>
            <Col lg ={10}>
                    
                        <ul>
                    <li>
                    Organized and led an introduction to data analytics Python workshop presented to 50+ students
                    </li>
                    </ul>
            </Col>
            <Col lg = {2} className = "date_tag">
            </Col >
</Row>
<Footer />
        </Container>
            
            </>
    )
}
