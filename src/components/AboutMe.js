import React from 'react';
import {Divider, Grid, Image, Segment, Header } from 'semantic-ui-react';
import ContactModal from './Contact';



const AboutMe = ()=> {

	return(
		<div>
	
		
		<Segment fluid style={{ padding: '3em 0em' }} vertical color='purple'>
		<Grid container stackable verticalAlign='middle'>
			<Grid.Row>
			
			<Grid.Column width={8}>
			<Header as='h1' style={{ fontSize: '2em', textAlign:'center' }}>
				About Me
				<Header.Subheader>
					Get In Touch <ContactModal />
					</Header.Subheader>
				</Header>
				<p style={{ fontSize: '1.33em' }}>
				I am a Software Engineer coming from a background of Education, who will bring exceptional collaboration skills, outside-the-box thinking, and an enthusiasm to find solutions to any team I join. 
				</p>
				
		
			</Grid.Column>
			<Grid.Column floated='right' width={6}>
				<Image bordered rounded size='large' src={`${process.env.PUBLIC_URL}/images/profile.svg`}/>
			</Grid.Column>
			</Grid.Row>
			
			
		</Grid>
		</Segment>
		
	</div>

	)
}

export default AboutMe