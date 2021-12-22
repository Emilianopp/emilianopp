
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
    <Col  lg = {10}  xs = {9} xs = {7}className = "header_col">
    <div className = "Header_name"> <span>Emiliano Penaloza</span></div>
    </Col>


<Col lg= {2} xs = {5}>

{/* EDUCATION ===================================== */}
<Row className = "resume_row">    
<div  className = "contact"> <span> 

    <Col lg = {12} className = "date_tag" > email: <a href="epenaloz@uwo.ca">epenaloz@uwo.ca</a> 
 
            </Col>
   



<Col lg = {12} className = "date_tag" > website: <a href="emilianopp.com">emilianopp.com</a> 
 
        </Col>


</span></div> 
</Row>

</Col>
</Row>

{/* EDUCATION ===================================== */}
    <Row className = "resume_row">      
    <h2> Education </h2>
    <Col lg = {10}  xs = {9} > Honours Specialization in Data Science, Western University, GPA: 3.7
            </Col>
                <Col lg = {2}  xs = {3} className = "date_tag"> 
            </Col>
   
    <Col lg ={10}>
    </Col>
    <Col lg = {2}  xs = {3} className = "date_tag">
    Sept 2017 – Present
    </Col >
    </Row>



    

    <Row className = "resume_row">
            <h2 className="work"> Research Experience </h2>
         {/* LAB ====================================================== */}

    <Col lg = {10}  xs = {9} > NSERC USRA department of Statistics, Western University - London, ON       
            </Col>
                <Col lg = {2}  xs = {3} className = "date_tag"> May 2021 – Sept 2021
            </Col>
            <Col lg = {10}  xs = {9}>
            <ul>
                <li className="list_bullet">
                Produced analysis of Seurat, SC3, Giniclust and Backspin single cell RNA sequence clustering algorithms  
                </li>
                <li>
                Concluded Backspin and Giniclust compared best to real clusters when analyzing human brain cell data
                </li>
                <li>
                Utilized Python’s Selenium web scraper to more efficiently gather data to broaden our analysis
                </li>
                <li>
                Co-produced an analysis poster  presenting the results of our research  
                </li>
             

            </ul>
        </Col>   


         {/*Epiclomal  */}
         <Col lg = {10}  xs = {9} > Epiclomal - London, ON       
            </Col>
                <Col lg = {2}  xs = {3} className = "date_tag"> May 2021 – Present
            </Col>
            <Col lg = {10}  xs = {9}>
            <ul>
                <li className="list_bullet">
                Implemented changes to existing R scripts based on user feedback  
                </li>
                <li>
                Refactored Snakemake pipeline to support more environments by implementing support for various job scheduler software
                </li>
                <li>
                Currently working on refactoring the project’s repository into a more compact better documented package
                </li>
             

            </ul>
        </Col> 
         {/*THESIS  */}
        <Col lg = {10}  xs = {9} > Undergraduate Thesis  - London, ON       
            </Col>
                <Col lg = {2}  xs = {3} className = "date_tag"> May 2021 – Present
            </Col>
            <Col lg = {10}  xs = {9}>
            <ul>
                <li className="list_bullet">
                Produced a pipeline to cluster single cell RNA sequences  
                </li>
                <li>
                Pipeline is engineered to execute preprocessing, clustering, analysis and comparison steps in Compute Canada’s cloud environment
                </li>
                <li>
                Working on publishing a journal entry dedicated to the pipeline to the Journal of Open-Source Software 
                </li>
             

            </ul>
        </Col>   
     
    </Row>

{/* WORK EXPIRIENCE ===================================== */}
<Row >      
    <h2> Work Expirience </h2>
    </Row>  
    <Row className = "resume_row">
    <Col lg = {10}  xs = {9} > DevOps Engineer CO-OP, Sun Life Financial – Toronto, ON  
            </Col>
                <Col lg = {2}  xs = {3} className = "date_tag">  Jan 2021 - May 2021
            </Col>

    <Col lg ={10}>
        <ul>
    <li>
    Engineered a CI/CD Jenkins scripted pipeline that would automate deployment of SQL scripts from development to production
    </li>
    <li>
    Obtained project approval by pitching pipeline project to high-ranking non-technical stakeholders 
    </li>
    <li>
    Implemented pipeline steps with the use of Bash, Groovy and SQL scripts  
    </li>
    <li>
    Integrated functionality of ServiceNow, MS teams as well as Jira into existing software to enhance user functionality
    </li>
    <li>
    Met with Microsoft SQL US/CA, as well as, Postgres SQL U.S/CA Database leads in order to customize pipeline to best suit their needs.  
    </li>
    <li>
    Successfully integrated pipeline into production workflow 
    </li>
    </ul>
    </Col>

    </Row>

<Row className = "resume_row">
<Col lg = {10}  xs = {9} >  Actuarial CO-OP ALM, Sun Life Financial – Waterloo, ON     
            </Col>
                <Col lg = {2}  xs = {3} className = "date_tag">    May 2020 - Dec 2020
            </Col>

            <Col lg ={10}>
                   
                        <ul>
                    <li>
                    Assisted in the integrating Sun Life's ALM infrastructure from IFRS-4 accounting standards to the newly proposed IFRS-17 standards 
                    </li>
                    <li>
                    Integrated VBA into Earnings at Risk (EaR) reporting workflow to reduce runtime from 8 hours to 10 minutes by integrating VBA
                    </li>
                    <li>
                    Improved workflow allowed for more in-depth analysis of market assumptions and allowed team to more efficiently meet deadlines
                    </li>
                    <li>
                    Using new EaR workflow compared shocking on a Key Rate Duration (KRD) basis vs shocking on a curve wide basis for all of Sun Life’s Canadian products
                    </li>

                    <li>
                    Proposed a shifting from shocking on a curve wide basis towards shocking on a KRD basis to various Associative Vice Presidents and Directors 
                    </li>
                    <li>
                    KRD shocking was implemented into Sunlife’s short term health products
                    </li>

                    </ul>
            </Col>
            <Col lg = {2}  xs = {3} className = "date_tag">
                    
            </Col >
</Row>



{/* PERSONAL PROJECTS EXPIRIENCE ===================================== */}
<Row >      
    <h2> Personal Projects  </h2>
    </Row>  
    <Row className = "resume_row">
    <Col lg = {10}  xs = {9} > skillQuery.com
            </Col>
                <Col lg = {2}  xs = {3} className = "date_tag">
            </Col>

    <Col lg ={10}>
        <ul>
    <li>
    Used open-source job postings to create a web app that provides job requirement analytics 



    </li>
    <li>
    Provides users with analytics on most sought-after programming languages and modules for their given location and role

    </li>
    <li>
    Primary stack is composed of Hugging Face NLP transformers, Flask API and React.js frontend
    </li>
    <li>
    Currently working on deployment through Amazon Web Services
    </li>
    <li>
    Met with Microsoft SQL US/CA and Postgres SQL U.S/CA Database leads in order to customize pipeline to best suit their needs.  
    </li>
    <li>
    Successfully integrated pipeline into production workflow 
    </li>
    </ul>
    </Col>

   

<Col lg = {10}  xs = {9} >     Student Mental Health Analysis         
            </Col>
                <Col lg = {2}  xs = {3} className = "date_tag">   
            </Col>

            <Col lg ={10}>
                   
                        <ul>
                    <li>                              	      
                    Collected student mental health data through volunteer surveys 


                    </li>
                    <li>
                    Used Decision Trees as well as Lasso/Ridge regression to draw inference on variables affecting student mental health

                    </li>
                    <li>
                    Concluded diet, sleep and faculty of study were the primary factors affecting student wellbeing 
                    </li>



                    </ul>
            </Col>
            <Col lg = {2}  xs = {3} className = "date_tag">
                    
            </Col >
            <Col lg = {10}  xs = {9} > Integration of Machine Learning Algorithms
            </Col>
                <Col lg = {2}  xs = {3} className = "date_tag">
            </Col>

    <Col lg ={10}>
        <ul>
    <li>
    Implemented Linear/Logistic models, Decision trees and Neural networks from scratch using Python 

    </li>
    </ul>
    </Col>



    <Col lg = {2}  xs = {3} className = "date_tag">
                    
                    </Col >
                    <Col lg = {10}  xs = {9} >  Conversational Therapist Agent (Hack Western)
                    </Col>
                        <Col lg = {2}  xs = {3} className = "date_tag">
                    </Col>
        
            <Col lg ={10}>
                <ul>
            <li>
            Trained a GPT conversational agent on over 800 therapist client forum conversations 


        
            </li>
            <li>
          
    `       Integrated speech interaction with model using Dasha.AI

        
            </li>
            </ul>
            </Col>
</Row>

{/* TEACHING EXPIRIENCE ====================== */}
    
<Row className = "resume_row">
            <h2 className="work"> Teaching & Leadership Expirience</h2>
         {/* LAB ====================================================== */}

    <Col lg = {10}  xs = {9} > Intro to Python Workshop, Western university - London, ON						              
            </Col>
                <Col lg = {2}  xs = {3} className = "date_tag"> Feb,Nov 2021 
            </Col>
            <Col lg = {10}  xs = {9}>
            <ul>
                <li className="list_bullet">
                Worked with the Statistical Sciences department at Western to create and execute the Intro to Python workshop with an attendance of 30 students
                </li>
                
             

            </ul>
        </Col>    
       

{/* TUTOR ====================================================== */}

            <Col lg = {10}  xs = {9} > Tutor, Freelance - London, ON  
            </Col>
                <Col lg = {2}  xs = {3} className = "date_tag"> Sept 2018 - Present
            </Col>
            <Col lg = {10}  xs = {9}>
            <ul>
                <li className="list_bullet">
                Ran one-on-one and group tutoring sessions. 
                </li>
                 
                <li>
                Courses tutored; Calculus I, Calculus II, Introduction to Probability
                </li>
              
             

            </ul>
            </Col>
              
           
 {/* WAI ======================== */}
 <Col lg = {10}  xs = {9} > WAI VP Education, Western University - London, ON 
            </Col>
                <Col lg = {2}  xs = {3} className = "date_tag"> Sept 2021 - Present
            </Col>
            <Col lg = {10}  xs = {9}>
            <ul>
                <li className="list_bullet">
                Created and conducted workshops on Machine Learning and Software Engineering concepts
                    
                </li>
                <li>
                Notable topics; Introduction to Machine Learning, Introductory Computer Vision, Introductory Natural Language Processing, Mathematics of Neural Networks and Introduction to Project Management
                    
                </li>
                

            </ul>
            </Col>
            </Row>

        {/* WS ====================================================== */}
    <Row>
            <Col lg = {10}  xs = {9} > Western Strength Nutrition and Strength Coach, Western University - London, ON                
            </Col>
                <Col lg = {2}  xs = {3} className = "date_tag"> Sept 2018 - June 2020
            </Col>
            <Col lg = {10}  xs = {9}>
            <ul>
                <li className="list_bullet">
                Personally created workout and nutrition plans for 8 concurrent club members  
                </li>
                <li>
                Plans were tailored given members body composition, strength and conditioning goals             
                </li>
             

            </ul>
            </Col>
            </Row>
        <Row>
            {/* ++++++++++++++++++++++++++++CLOSING DIV BELOW++++++++++++++++++++++++++++++++++++ */}
    </Row>

<Row >      
    <h2> Extra-Curricular  </h2>
    </Row>  

    
    <Row className = "resume_row">
    <Col lg = {10}  xs = {9} >     Western Oasis Analytics Competition First Place					

       
</Col>
    <Col lg = {2}  xs = {3} className = "date_tag">   
    Oct 2021
</Col>

    <Col lg = {10}  xs = {9} > Vice- President Communications and Events, Western Strength
            </Col>
                <Col lg = {2}  xs = {3} className = "date_tag">

                Sept 2018 - May 2020              
                 </Col>

    <Col lg ={10}>
        <ul>
    <li>
    	   
Three times organizer of the annual Western Collegiate Classic being the biggest student ran athletic event at Western



    </li>
    <li>
Responsible for getting sponsor funding from notable businesses such as; Lulu Lemon, Spartan Nutrition, Tim Hortons and Scotiabank


    </li>
    <li>
    Organized and executed over 20 student events over my club tenure 
    </li>
    
    </ul>
    </Col>

   


     
                   
                    
    
            <Col lg = {10}  xs = {9} > Enactus Hacks Best Team Chemistry Award Recipient					 
            </Col>
                <Col lg = {2}  xs = {3} className = "date_tag">
                Jan 2020
            </Col>
                
            <Col lg = {10}  xs = {9} className ="padder">        					 
            </Col>
                <Col lg = {2}  xs = {3} className = "date_tag">
                
            </Col>

   
</Row>


{/* <Footer /> */}
        </Container>
            
            </>
    )
}
