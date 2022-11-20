import React from 'react'
import {Container, Header, Icon } from 'semantic-ui-react'
import ReactTypingEffect from 'react-typing-effect'


const PortfolioHeader = () => {

  return(
  <div >
    <Container fluid  textAlign='center' className='header'>
  <Header as='h1' content='Sarah Barbee' style={{fontSize: '4em', marginTop: '1em'}}>
    
    Sarah Barbee
    <Header.Subheader>
	<ReactTypingEffect text={["Full Stack Developer", "Software Engineer", "Backend Developer", "Frontend Developer"]}style={{fontSize: '1.7em', margin: '3em'}}></ReactTypingEffect>
    </Header.Subheader>
  </Header>
  </Container>
  </div>
)
}
export default PortfolioHeader