import _ from 'lodash'
import React from 'react'
import { Grid, Image, Icon, Divider, Segment } from 'semantic-ui-react'



const Technology = ()=> {

	const columns = _.times(16, (i) => (
		<Grid.Column key={i}>
		  <Image src='/images/wireframe/image.png' />
		</Grid.Column>
	  ))

	return(
		<div>
	<Divider section />
		
		<Segment fluid style={{ padding: '8em 0em' }} verticalAlign='center'>
		<Grid columns={14}>
			
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
		
	</div>

	)
}

export default Technology