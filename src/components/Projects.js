import _ from 'lodash'
import React from 'react'
import { Grid, Image, Icon, Divider, Segment, Header, Card } from 'semantic-ui-react'



const Projects = ()=> {

	const projects = [
		{
			header: 'PetMatch App',
			description:"A full stack application. Users must create a log in so they can create a pet profile that they can update and delete. They can also see other pets on the app and message users to make play-dates.",
			meta:'MongoDB, Express, React.js, Node.js, and Bootstrap-React, Sass',
			image:"petMatch.png",
			href: 'https://petplaydate.netlify.app/'
		},

		{
			header:"Routine Application",
			description:"A Daily Routine Maker utilzing an Affirmation Database and WeatherAPI",
			meta:"MongoDB, Express, Node.js, and LiquidJS, BootStrap",
			image:"dailyroutine.png",
			href: "https://dailyroutine.fly.dev/"
		},

		{
			header:"Boo-p It",
			description:"Simple Boo-p it style javascript game with a Halloween theme.",
			meta:"JavaScript, HTML 5, and CSS 3",
			image:'boopIt.png',
			href:'https://skbarbee.github.io/Boo-p-it-/'
		}

	]
	
 const projectCards = projects.map(project =>(
	<Card>
		<Image src={`${process.env.PUBLIC_URL}/images/${project.image}`} wrapped ui={false}/>
		<Card.Content>
		
		<Card.Header href={project.href}>{project.header}</Card.Header>
		<Card.Meta>{project.meta}</Card.Meta>
		<Card.Description>{project.description}</Card.Description>
		
		</Card.Content>
	</Card>

 ))
	return(
		<div>
			<Segment fluid style={{ padding: '2em 1em', marginBottom:'2em' }} verticalAlign='center' color='purple'>
				<Header size='huge' textAlign='center' color='purple'>Projects</Header>
				<Card.Group centered stackable>
					{projectCards}
				</Card.Group>
			</Segment>
		</div>
	)
}

export default Projects