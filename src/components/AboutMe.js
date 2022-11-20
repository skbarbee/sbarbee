import React from 'react';
import {Divider, Grid, Image, Segment, Container, Header } from 'semantic-ui-react';

const AboutMe = ()=> {

	return(
		<div>
	<Divider section />
		
		<Segment fluid style={{ padding: '8em 0em' }} vertical>
		<Grid container stackable verticalAlign='middle'>
			<Grid.Row>
			<Grid.Column width={8}>
				<Header as='h3' style={{ fontSize: '2em' }}>
				About Me
				</Header>
				<p style={{ fontSize: '1.33em' }}>
				👋 I'm Sarah. I am a full stack engineer coming from a background of education.  💜
				</p>
			</Grid.Column>
			<Grid.Column floated='right' width={6}>
				<Image bordered rounded size='large' src={`${process.env.PUBLIC_URL}/images/profile.svg`}/>
			</Grid.Column>
			</Grid.Row>
			<Grid.Row>
			<Grid.Column textAlign='center'>
			
			</Grid.Column>
			</Grid.Row>
		</Grid>
		</Segment>
		
	</div>

	)
}

export default AboutMe