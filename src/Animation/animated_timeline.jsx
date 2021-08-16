import { React, useEffect } from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineOppositeContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";
import TimelineContent from "@material-ui/lab/TimelineContent"
import "./aos.css";
import Aos from "aos";
import { useMediaQuery } from "react-responsive";
function Left_content(direction,content,year){
    //return(<div>{direction}</div>)
    if(direction === "left"){
        return(
            <>
            <div className = "time_content_left">
                <div className = 'left_wrapper'>
            <div className="year_left">
            
            {year}
            
            
            </div>
            
            <div className="content_left">
            
            {content}
            
            
            </div>
            </div>
            </div>
            </>
        )}
        
        else{
            return null;
        }
    }

    function Right_content(direction,content,year){
        if ( direction === "right"){
            return(
                <>
                <div className="year">
                
                {year}
                
                
                </div>
                <div className="content">
                
                {content}
                
                
                </div>
</>

            )
        }
            else {
                return null;
            }
        }
    

export default function Animated_timeline(direction, icon,content,year) {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1000 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1000 });
  const animation_dir = `fade-${direction}`
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
    
      <div data-aos={animation_dir} data-aos-anchor-placement="top-center">
        <TimelineItem className="time_item" >
        <TimelineContent className = "time_content" >
            {Left_content(direction,content,year)}
            </TimelineContent >
          <TimelineSeparator className="timeline_seperator">
            
            <TimelineDot className="timeline_dot " color="#c3e3e6">
              {/* {icon}{" "}  */}
              
              {icon}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className = "time_content" >
           {Right_content(direction,content,year)}
          </TimelineContent>
        
        </TimelineItem>
      </div>
    </>
  );
}
