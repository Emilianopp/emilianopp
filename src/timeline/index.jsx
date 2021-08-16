import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Animated_timeline from '../Animation/animated_timeline';
import './timeline.css'
import ChildFriendlyOutlinedIcon from '@material-ui/icons/ChildFriendlyOutlined';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
export default function BasicTimeline() {
  const icon_style = { fontSize: '50' ,color : 'black' };
  return (
    <Timeline className={"timeline"} >
      {/* {Animated_timeline("right",<ChildFriendlyOutlinedIcon style={icon_style}  />)}  */}
      {/* <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className= "timeline_dot " color = '#c3e3e6'><ChildFriendlyOutlinedIcon style={{ fontSize: '50' ,color : 'black' }}  /></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>hi</TimelineContent>
      </TimelineItem> */}
     
    {Animated_timeline("right", <ChildFriendlyOutlinedIcon/>,"Born in Mexico City","1999")}

    {Animated_timeline("left", <img src= "https://image.flaticon.com/icons/png/512/3159/3159868.png" width = "25" height = "25" />,"Moved to Canada","2010")}
    {Animated_timeline("right", <LibraryBooksIcon/>,"Started at Western","2017-present")}
    {Animated_timeline("left", <BusinessCenterIcon/>,"Sunlife Actuarial Co-op","2020")}
  
      
    </Timeline>
  );
}