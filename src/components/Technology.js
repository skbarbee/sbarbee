import _ from 'lodash'
import React from 'react'
import { Grid, Icon, Segment, Header, Container } from 'semantic-ui-react'



const Technology = ()=> {

	

	return(
		<div>
	
		<Container fluid>
		<Segment style={{ }} color='teal'>
		<Header size='huge' textAlign='center' color='teal'>Skills</Header>
		<Grid textAlign='center' className="ui stackable fluid centered grid justified wrap"  >
			
			<Grid.Column fluid verticalAlign='center'>
				<Icon className='devicon-express-original' size ='huge'/>
			</Grid.Column>
			<Grid.Column fluid verticalAlign='center'>
				<Icon className='devicon-mongodb-plain-wordmark' size ='huge'/>
			</Grid.Column>
			<Grid.Column fluid verticalAlign='center'>
				<Icon className='devicon-javascript-plain' size ='huge'/>
			</Grid.Column>
			<Grid.Column fluid verticalAlign='center'>
				<Icon className='devicon-django-plain colored' size ='huge'/>
			</Grid.Column>
			<Grid.Column fluid verticalAlign='center'>
				<Icon className='devicon-postgresql-plain' size ='huge'/>
			</Grid.Column>
			<Grid.Column fluid verticalAlign='center'>
				<Icon className='devicon-nodejs-plain' size ='huge'/>
			</Grid.Column>
			<Grid.Column fluid verticalAlign='center'>
				<Icon className='devicon-python-plain' size ='huge'/>
			</Grid.Column>
			<Grid.Column fluid verticalAlign='center'>
				<Icon className='devicon-github-original' size ='huge'/>
			</Grid.Column>
			<Grid.Column fluid verticalAlign='center'>
				<Icon name='css3 alternate' size ='huge'/>
			</Grid.Column>
			<Grid.Column fluid verticalAlign='center'>
				<Icon name='html5' size ='huge'/>
			</Grid.Column>
			<Grid.Column fluid verticalAlign='center'>
				<Icon name='react' size ='huge'/>
			</Grid.Column>
			<Grid.Column fluid verticalAlign='center'>
				<Icon className='devicon-sass-original' size ='huge'/>
			</Grid.Column>
			<Grid.Column fluid verticalAlign='center'>
				<Icon className='devicon-bootstrap-plain' size ='huge'/>
			</Grid.Column>
			<Grid.Column fluid verticalAlign='center'>
				<Icon className='devicon-canva-plain' size ='huge'/>
			</Grid.Column>
			

		</Grid>
		</Segment>
		</Container>
		
	</div>

	)
}

export default Technology