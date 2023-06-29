import React from 'react'
import {  Image,  Segment, Header, Card, Button } from 'semantic-ui-react'



const Projects = ()=> {

	const projects = [
		{
			header: 'BamPow',
			description:"Fullstack Application Where Users Can Track Their Favorite Author, Illustrators, Publishers, And Characters For Comics",
			meta:'Django, Python, React.js, Node.js, Semantic-UI ',
			image:"BamPow.png",
			href: 'https://bampow.netlify.app/',
			signIn: 'Username: sb@sb.com Password: Password1'
			
		},
		{
			header: 'PetMatch App',
			description:"A full stack application. Users must create a log in so they can create a pet profile that they can update and delete. They can also see other pets on the app and message users to make play-dates.",
			meta:'MongoDB, Express, React.js, Node.js, and Bootstrap-React, Sass',
			image:"petMatch.png",
			href: 'https://petplaydate.netlify.app/',
			signIn: 'Username: sb@sb.com Password: sb'
			
		},

		{
			header:"Routine Application",
			description:"A Daily Routine Maker utilzing an Affirmation Database and WeatherAPI",
			meta:"MongoDB, Express, Node.js, and LiquidJS, BootStrap",
			image:"dailyroutine.png",
			href: "https://dailyroutine.fly.dev/",
			signIn: 'Username: User1 Password: User1',
		},

		{
			header:"Boo-p It",
			description:"Simple Bop-it style javascript game with a Halloween theme. You should play it! It's nostalgic.",
			meta:"JavaScript, HTML 5, and CSS 3",
			image:'boopIT.png',
			href:'https://skbarbee.github.io/Boo-p-it-/'
		}

	]
	
 const projectCards = projects.map(project =>(
	<Card key={project.header}>
	
			<Image src={`${process.env.PUBLIC_URL}/images/${project.image}`} wrapped ui={false}/>
	
		<Card.Content>
		
		
		<Card.Header size='huge'>{project.header}</Card.Header>
		<Card.Meta>{project.meta}</Card.Meta>
		<Card.Description>{project.description}</Card.Description><br></br>
		<Card.Meta>{project.signIn}</Card.Meta>
		</Card.Content>
		<Card.Content extra className='ui one button'>
		<a
			href={project.href}
			target='_blank'
			rel="noreferrer"
			aria-label={project.header}
			
		>
			
				<Button basic color='purple'>Check Out the Live Site</Button>
			
		
			</a>
		
		</Card.Content>
	</Card>

 ))
	return(
		<div>
			<Segment fluid style={{ padding: '3em', marginBottom:'2em' }} verticalAlign='justify' color='violet'>
				<Header size='huge' textAlign='center' color='violet'>Projects</Header>
				<Card.Group  centered stackable itemsPerRow={2} >
					{projectCards}
				</Card.Group>
			</Segment>
		</div>
	)
}

export default Projects