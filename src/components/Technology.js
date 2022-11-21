import _ from 'lodash'
import React from 'react'
import { Grid, Icon, Segment, Header, Container } from 'semantic-ui-react'



const Technology = ()=> {

	

	return(
		<div>
	
		<Container fluid>
		<Segment style={{ padding: '1em' }} color='teal'>
		<Header size='huge' textAlign='center' color='teal'>Skills</Header>
		<Grid stackable columns={15}>
			
			<Grid.Column>
				<Icon className='devicon-express-original' size ='huge'/>
			</Grid.Column>
			<Grid.Column>
				<Icon className='devicon-mongodb-plain-wordmark' size ='huge'/>
			</Grid.Column>
			<Grid.Column>
				<Icon className='devicon-javascript-plain' size ='huge'/>
			</Grid.Column>
			<Grid.Column>
				<Icon className='devicon-django-plain colored' size ='huge'/>
			</Grid.Column>
			<Grid.Column>
				<Icon className='devicon-postgresql-plain' size ='huge'/>
			</Grid.Column>
			<Grid.Column>
				<Icon className='devicon-nodejs-plain' size ='huge'/>
			</Grid.Column>
			<Grid.Column>
				<Icon className='devicon-python-plain' size ='huge'/>
			</Grid.Column>
			<Grid.Column>
				<Icon className='devicon-github-original' size ='huge'/>
			</Grid.Column>
			<Grid.Column>
				<Icon name='css3 alternate' size ='huge'/>
			</Grid.Column>
			<Grid.Column>
				<Icon name='html5' size ='huge'/>
			</Grid.Column>
			<Grid.Column>
				<Icon name='react' size ='huge'/>
			</Grid.Column>
			<Grid.Column>
				<Icon className='devicon-sass-original' size ='huge'/>
			</Grid.Column>
			<Grid.Column>
				<Icon className='devicon-bootstrap-plain' size ='huge'/>
			</Grid.Column>
			<Grid.Column>
				<Icon className='devicon-canva-plain' size ='huge'/>
			</Grid.Column>
			

		</Grid>
		</Segment>
		</Container>
		
	</div>

	)
}

export default Technology