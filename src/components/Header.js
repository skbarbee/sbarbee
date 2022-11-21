import React from 'react'
import {Container, Header, Icon, IconGroup, } from 'semantic-ui-react'
import ReactTypingEffect from 'react-typing-effect'


const PortfolioHeader = () => {

  return(
  <div >
    <Container fluid  textAlign='center' className='header'>
  <Header as='h1' content='Sarah Barbee' style={{fontSize: '4em', marginTop: '1em'}}>
    
    Sarah Barbee
    <Header.Subheader>
	<ReactTypingEffect text={["Full Stack Developer", "Back-End Developer", "Front-End Developer"]}style={{fontSize: '1.7em', margin: '3em'}}></ReactTypingEffect>
    </Header.Subheader>
    <Header.Subheader>
      <IconGroup style={{margin:"1em"}}>
      <a 
        href='https://github.com/skbarbee' 
        target='_blank'
        aria-label='Github'>
          <Icon className='devicon-github-original' size ='big' color='teal'/>
      </a>
      <a 
        href='https://www.linkedin.com/in/sarah-barbee/' 
        target='_blank'
        aria-label='LinkedIn'>
          <Icon className='devicon-linkedin-plain' size ='big' color='purple'/>
      </a>
      </IconGroup>
    </Header.Subheader>
  </Header>
 
  </Container>
  </div>
)
}
export default PortfolioHeader