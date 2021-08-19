import { React, useEffect } from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineOppositeContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";
import TimelineContent from "@material-ui/lab/TimelineContent";
import "./aos.css";
import Aos from "aos";
import { useMediaQuery } from "react-responsive";
function Left_content(direction_year, content, year) {
  //return(<div>{direction}</div>)

  if (direction_year === "left_year") {
    console.log(content, year);
    return (
      <>
        <div className="time_content_left">
          <div className="left_wrapper">
            <div className="year_left">{year}</div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="time_content_left">
        <div className="left_wrapper">
          <div className="content_left">{content}</div>
        </div>
      </div>
    );
  }
}

function Right_content(direction_year, content, year) {
  if (direction_year === "right_year") {
    return (
      <>
        <div className="year">{year}</div>
      </>
    );
  } else {
    return <div className="content">{content}</div>;
  }
}

export default function Animated_timeline_mobile(
  direction_year,
  direction,
  icon,
  content,
  year,
  last
) {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1000 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1000 });
  const animation_dir = `fade-${direction}`;
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  if (year === "1999") {
    return (
      <div data-aos={animation_dir} data-aos-anchor-placement="top-center">
        <h1 className = "timeline_header">Personal Timeline</h1>
        <TimelineItem className="time_item">
          <TimelineContent className="time_content">
            {Left_content(direction_year, content, year)}
          </TimelineContent>
          <TimelineSeparator className="timeline_seperator">
            <TimelineDot className="timeline_dot " color="#c3e3e6">
              {/* {icon}{" "}  */}

              {icon}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="time_content">
            {Right_content(direction_year, content, year)}
          </TimelineContent>
        </TimelineItem>
      </div>
    );
  } else if (last === true) {
    return (
      <>
        <div data-aos={animation_dir} data-aos-anchor-placement="top-center">
          <TimelineItem className="time_item">
            <TimelineContent className="time_content">
              {Left_content(direction_year, content, year)}
            </TimelineContent>
            <TimelineSeparator className="timeline_seperator">
              <TimelineDot className="timeline_dot " color="#c3e3e6">
                {/* {icon}{" "}  */}

                {icon}
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent className="time_content">
              {Right_content(direction_year, content, year)}
            </TimelineContent>
          </TimelineItem>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div data-aos={animation_dir} data-aos-anchor-placement="top-center">
          <TimelineItem className="time_item">
            <TimelineContent className="time_content">
              {Left_content(direction_year, content, year)}
            </TimelineContent>
            <TimelineSeparator className="timeline_seperator">
              <TimelineDot className="timeline_dot " color="#c3e3e6">
                {/* {icon}{" "}  */}

                {icon}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="time_content">
              {Right_content(direction_year, content, year)}
            </TimelineContent>
          </TimelineItem>
        </div>
      </>
    );
  }
}
