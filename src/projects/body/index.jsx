import { useState,React } from 'react' 
import { Col,Container,Row } from 'react-bootstrap'
import './body.scss'
import Project_cards from './Project_cards'
import r_python from './Project_cards/card_logos/R-python.png'
import { Document, Page,pdfjs } from 'react-pdf';
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Disclaimer_proj from '../../Disclaimer'
import reg from './Project_cards/card_logos/regression.png'
import tree from './Project_cards/card_logos/tree_web.png'
import game from './Project_cards/card_logos/pygame.png'
import tensor from './Project_cards/card_logos/tensor.png'
import nets from './Project_cards/card_logos/nets.png'

import react from './Project_cards/card_logos/react.png'
import py from './Project_cards/card_logos/python.png'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// for markdown imports always use root path file




function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    //   backgroundColor: 'white',
    },
  }));


export default function Body() {
    
    const classes = useStyles();
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Container className = "main_cont">
          <Row>
          <Col lg = {1} xs = {1} className='disc'> <Disclaimer_proj className = 'icon_disc' /></Col>

           <Col lg = {11} xs = {11}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
        indicatorColor="primary"
        textColor="primary">
          <Tab label="Projects" {...a11yProps(0)} />
          <Tab label={`Stats`} {...a11yProps(1)} />
         
        </Tabs>
        
      </AppBar>
      </Col>
      </Row>
      <TabPanel value={value} index={0}>
      
          
          <Row> 
          
          {Project_cards(game,'Pygame Space Invaders Clone','game.md')}
          {Project_cards(tensor,' Recreation Centre Traffic Analysis ','traffic.md')}
          {Project_cards(py,'Western Python Workshop','workshop.md')} 
           </Row>
           <Row>
           
           {/* {Project_cards(r_python,'Student Mental Health Analysis','test.md')} */}
           {/* {Project_cards(r_python,'RNA Sequence Pipeline','test.md')} */}
           {Project_cards(react,'Personal Site','web.md')}

           </Row>
           can you tell I like python...
      </TabPanel>
      <TabPanel value={value} index={1}>

      <Row> 
            {Project_cards(reg,'Linear Models','linear.md')}
            {Project_cards(tree,'Decision Trees','trees.md')}
            {Project_cards(nets,'Nueral Networks','nets.md')}
           
             </Row>
             <Row>


             </Row>
      </TabPanel>

    
 












            {/* <Row>  */}
            
        </Container>
    )
}
