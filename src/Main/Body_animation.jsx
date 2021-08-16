import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { config, useSpring, animated } from "react-spring";
import Slides from "./slides";
import Skills from "./Skills";
import { useState } from "react";
import './aos.css'
import Aos from "aos";

function Slide (){
  useEffect(() => {
   
    Aos.init({ duration: 2000 });
  }, []);

return(
<>
  <div data-aos='fade-down'> <Slides></Slides>  </div>
  <div data-aos='fade-up'  data-aos-anchor-placement="bottom-bottom"> <Skills /> </div>  
  </>
)};



export default function Body_animation() {
  return <Slide />;
}
