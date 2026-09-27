import { useEffect, useRef, useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import ProjCard from './ProjCard'
import data from "config/projectCardsContent"
import "styles/Home/ProjectCards.scss";

function SlidingCards() {
    // Render every card invisibly in one stacked cell so we can size all slides
    // to the tallest one; otherwise the carousel resizes (and the page jumps) per slide.
    const measurer = useRef(null)
    const [cardHeight, setCardHeight] = useState(undefined)

    useEffect(() => {
        const el = measurer.current
        if (!el) return
        const update = () => {
            const cards = el.querySelectorAll('.Project-card-content')
            const max = Math.max(...Array.from(cards, c => c.offsetHeight))
            if (max > 0) setCardHeight(max)
        }
        update()
        const ro = new ResizeObserver(update)
        ro.observe(el)
        return () => ro.disconnect()
    }, [])

    return (
        <div className="slides-wrapper">
            <div className="slides-measurer" ref={measurer} aria-hidden="true">
                {data.map((item, i) => <ProjCard key={i} item={item} />)}
            </div>
            <Carousel className= "slides" animation = "fade" duration = "600"
            navButtonsProps = {{style : { display: "none"}}}
            indicatorIconButtonProps={{
                style: {
                    color: '#A9B4C2'
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    color: "#fffc5cfa",
                }
            }}
            indicatorContainerProps={{
                style: {
                    marginTop: '10px',
                }
            }}>
                {
                    data.map( (item, i) => <ProjCard key={i} item={item} minHeight={cardHeight} /> )
                }
            </Carousel>
        </div>
    )
}

export default SlidingCards
