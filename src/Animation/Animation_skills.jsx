
import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { config, useSpring, animated } from "react-spring";
import Slides from "../slides/slides";
import Skills from "../Skills/Skills";
import { useState } from "react";
import "./aos.css";
import Aos from "aos";
import { useMediaQuery } from "react-responsive";
export default function Animated_skills() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1000 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1000 });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      {isDesktopOrLaptop && (
        <>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <Skills />
          </div>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <Skills />
          </div>
        </>
      )}
    </div>
  );
}