import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineContent";
import content from "config/content.json";
import { withStyles } from "@material-ui/styles";
import "styles/Home/timeline.scss";


export default function PersonalTimeline() {
  const TimelineItemBetter = withStyles({
    missingOppositeContent: {
      "&:before": {
        display: "none",
      },
    },
  })(TimelineItem);
  return (
    <Timeline>
      {content.timeline["timelineContent"].map((item, i) => (
        <>
          <TimelineItemBetter>
            <TimelineOppositeContent color={`${content.textColor}`}>
              <div className="left-text" style = {{color : `${content.textColor}`}}>{item.when}</div>
            </TimelineOppositeContent>
            <TimelineSeparator >
              <TimelineDot variant="outlined" style = {{borderColor : "#fffc5cfa"}} />
              <TimelineConnector style = {{backgroundColor: '#A9B4C2', opacity : "80%"}}/>
            </TimelineSeparator>
            <TimelineContent style = {{color : `${content.textColor}`}}> {item.what}</TimelineContent>
          </TimelineItemBetter>
        </>
      ))}
      <TimelineItemBetter>
        <TimelineOppositeContent color= {`${content.textColor}`}>
          <div className="left-text" style = {{color : `${content.textColor}`}}>{content.timeline.timelineLast.when}</div>
        </TimelineOppositeContent>
        <TimelineSeparator >
          <TimelineDot style = {{borderColor : "#fffc5cfa"}} variant="outlined"/>
        </TimelineSeparator>
        <TimelineContent style = {{color : content.textColor}}>{content.timeline.timelineLast.what}</TimelineContent>
      </TimelineItemBetter>
    </Timeline>
  );
}
