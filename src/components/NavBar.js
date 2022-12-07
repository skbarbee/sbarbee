import React, { useState } from "react";
import {
  Menu,
  Sidebar,
  Grid,
  Sticky,
  Segment,
  Icon,
  Header,
  Image,
} from "semantic-ui-react";
import { HashLink as Link } from "react-router-hash-link";
import PortfolioHeader from "./Header";
import AboutMe from "./AboutMe";
import Technology from "./Technology";
import Projects from "./Projects";


const Navigation = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Grid columns={1}>
	  
		<Grid.Column>
		<Icon name='align justify' 
		 onClick={(e) => setVisible(true)}/> 
		
            
        
        </Grid.Column>

        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
           <Sticky> <Sidebar
              as={Menu}
			  direction="top"
              animation="push"
              icon="labeled"
              onHide={() => setVisible(false)}
              visible={visible}
              width="thin"
            >
              <Menu.Item as="a">
                <Link to="#header">Quick Links</Link>
              </Menu.Item>
              <Menu.Item as="a">
                <Link to="#about">About Me</Link>
              </Menu.Item>
              <Menu.Item as="a">
                <Link to="#projects">Projects</Link>
              </Menu.Item>
              <Menu.Item as="a">
                <Link to="#technology">Technology</Link>
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
				<Grid.Row columns={1} textAlign='centered'>
				<PortfolioHeader />
              	<AboutMe />
              	<Projects />
              	<Technology />

				</Grid.Row>
              
            </Sidebar.Pusher>
 </Sticky>
          </Sidebar.Pushable>
		 
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Navigation;
