import React from 'react'
import {Container, Header, Icon, IconGroup, Popup, } from 'semantic-ui-react'
import ReactTypingEffect from 'react-typing-effect'


const PortfolioHeader = () => {


  return(
  <div >
    <Container fluid  textAlign='center' className='header'>
  <Header as='h1' content='Sarah Barbee' style={{fontSize: '4em', marginTop: '1em'}}>
    
    Sarah Barbee
    <Header.Subheader>
	<ReactTypingEffect text={["Full Stack Developer", "Back-End Developer", "Front-End Developer"]}style={{fontSize: '1.7em', }}></ReactTypingEffect>
    </Header.Subheader>
    <Header.Subheader>
      <IconGroup style={{margin:"1em"}} size='big'>
      <a 
        href='https://github.com/skbarbee' 
        target='_blank'
        aria-label='Github'>
          <Icon className='devicon-github-original'  color='purple'/>
      </a>
      <a 
        href='https://www.linkedin.com/in/sarah-barbee/' 
        target='_blank'
        aria-label='LinkedIn'>
          <Icon className='devicon-linkedin-plain'  color='violet'/>
      </a>
      <a 
        href={`${process.env.PUBLIC_URL}/Resume.pdf`} 
        target='_blank'
        aria-label='Resume'>
          <Icon name='file alternate'  color='teal'/>
      </a>
      </IconGroup>
    </Header.Subheader>
  </Header>
 
  </Container>
  </div>
)
}
export default PortfolioHeader