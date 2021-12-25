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
import { config } from "process";

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
            <TimelineOppositeContent color="text.secondary">
              <div className="left-text">{item.when}</div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{item.what}</TimelineContent>
          </TimelineItemBetter>
        </>
      ))}
      <TimelineItemBetter>
        <TimelineOppositeContent color="text.secondary">
          <div className="left-text">{content.timeline.timelineLast.when}</div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>{content.timeline.timelineLast.what}</TimelineContent>
      </TimelineItemBetter>
    </Timeline>
  );
}
