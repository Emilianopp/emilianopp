import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import ProjCard from './ProjCard'
import data from "config/projectCardsContent"
import "styles/Home/ProjectCards.scss";

function SlidingCards() {
    return (
        <Carousel className= "slides" animation = "fade" duration = "1000"
        
        
        navButtonsProps = {{style : { display: "none"}}}
        indicatorIconButtonProps={{
            style: {
                   // 1
                color: '#A9B4C2'       // 3
            }
        }}
        activeIndicatorIconButtonProps={{
            style: {
                color: "#fffc5cfa",
                 // 2
            }
        }}
        indicatorContainerProps={{
            style: {
                marginTop: '10px', // 5
                // 4
            }
    
        }}>
            {
                data.map( (item, i) => <ProjCard key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default SlidingCards
