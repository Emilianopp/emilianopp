import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@material-ui/lab/TabContext";
import TabPanel from "@material-ui/lab/TabPanel";
import content from "config/content.json";
import { Container,Col, Row } from "react-bootstrap";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "styles/Home/skills.scss";

const theme = createTheme({
  palette: {
    primary: {
      
      main: '#fffc5cfa',
    },
 
  },
});

const theme2 = createTheme({
  palette: {
    primary: {main:'#FB0092'},
  },
  overrides: {
    Tabs: {
      raisedPrimary: {
        color: '#FB0092',
      },
    },
  }
});

function Stars(n) {
  return [...Array(n)].map(() => <div className="circle"></div>);
}

export default function Skills() {
  const skills = content.Skills;
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <ThemeProvider theme={theme}>
      <TabContext value={value} >
        <Box sx={{ width: "100%" }}>
        
          <Tabs
            value={value}
            
            onChange={handleChange}
            indicatorColor="primary"
            textColor="inherit"
            
            
            
          >
            {skills.map((item) => (
              <Tab style ={{color: content.textColor}} value={item.id} label={item.title} />
            ))}
          </Tabs>
          
        </Box>
        {skills.map((item) => (
          <TabPanel value={item.id} >
            <Container fluid>
              <Row>
                <Col xs={12} xl={12} md={12}>
                  
                    {item.tools
                      .sort(function (a, b) {
                        return b.rating - a.rating;
                      })
                      .map((tech) => (
                        
                          <Row style = {{padding: "0px"}}>
                            <Col style = {{margin: "0px"} } xs={6} xl={6} md={6} style={{color: `${content.textColor}`}}>
                              {tech.name}
                            </Col>
                            <Col xs={6} xl={6} md={6}>
                              {Stars(tech.rating)}
                            </Col>
                          </Row>
                        
                      ))}
                  
                </Col>
              </Row>
            </Container>
          </TabPanel>
        ))}
        
      </TabContext>
      </ThemeProvider>
    </Box>
  );
}
