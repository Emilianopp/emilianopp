import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@material-ui/lab/TabContext";
import TabPanel from "@material-ui/lab/TabPanel";
import content from "config/content.json";

export default function Skills() {
  const skills = content.Skills;
  const [value, setValue] = React.useState("1");
  const handleChange = ( newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            {skills.map((item) => (
                <Tab value={item.id} label={item.title} />
            ))}
          </Tabs>
        </Box>
        {skills.map((item) => (
          <TabPanel value={item.id}>
            <ul>
              {item.tools.map((tech) => (
                <li>{tech}</li>
              ))}
            </ul>
          </TabPanel>
        ))}

        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
