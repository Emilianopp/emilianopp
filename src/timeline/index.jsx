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
import Animated_timeline_mobile from '../Animation/animated_timeline_mobile';
import { useMediaQuery } from "react-responsive";

export default function BasicTimeline() {
  const icon_style = { fontSize: '50' ,color : 'black' };
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1000 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1000 });
  return (
    <>
  { isDesktopOrLaptop &&
    <Timeline className={"timeline"} >

     {/* Mexico */}
    {Animated_timeline("right_year","right", <ChildFriendlyOutlinedIcon/>,"Born in Mexico City","1999")}
    {/*Canada  */}
    {Animated_timeline("left_year","left", <img src= "https://image.flaticon.com/icons/png/512/3159/3159868.png" width = "25" height = "25" />,"Moved to Canada","2010")}
  {/* Western */}
    {Animated_timeline("right_year","right", <LibraryBooksIcon/>,"Started at Western","2017-present")}
    {/* Sunlife */}
    {Animated_timeline("left_year","left", <BusinessCenterIcon/>,"Sunlife Actuarial co-op","May -  Decebmber 2020")}
    {/* Devops */}
    {Animated_timeline("right_year","right", <img src= "https://cdn.iconscout.com/icon/premium/png-512-thumb/devops-1596557-1355335.png" width = "25" height = "25" />,"Sunlife DevOps co-op","January -May 2021")}
    {/* Camila lab */}
    {Animated_timeline("left_year","left", <BusinessCenterIcon/>,"Western Data Science Research Co-op","May 2020 - Present",true)}

    </Timeline>
}
{ isTabletOrMobile &&
    <Timeline className={"timeline"} >

     {/* Mexico */}
    {Animated_timeline_mobile("right_year","right", <ChildFriendlyOutlinedIcon/>,"Born in Mexico City","1999")}
    {/*Canada  */}
    {Animated_timeline_mobile("left_year","left", <img src= "https://image.flaticon.com/icons/png/512/3159/3159868.png" width = "25" height = "25" />,"Moved to Canada","2010")}
  {/* Western */}
    {Animated_timeline_mobile("right_year","right", <LibraryBooksIcon/>,"Started at Western","2017-present")}
    {/* Sunlife */}
    {Animated_timeline_mobile("left_year","left", <BusinessCenterIcon/>,"Sunlife Actuarial co-op","May -  Decebmber 2020")}
    {/* Devops */}
    {Animated_timeline_mobile("right_year","right", <img src= "https://cdn.iconscout.com/icon/premium/png-512-thumb/devops-1596557-1355335.png" width = "25" height = "25" />,"Sunlife DevOps co-op","January -May 2021")}
    {/* Camila lab */}
    {Animated_timeline_mobile("left_year","left", <BusinessCenterIcon/>,"Western Data Science Research Co-op","May 2020 - Present",true)}

    </Timeline>
}
</>

  );
}