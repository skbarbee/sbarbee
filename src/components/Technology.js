import React from "react";
import { Popup, Icon, Segment, Header, Container } from "semantic-ui-react";

const Technology = () => {
  return (
    <div>
      <Segment fluid style={{ padding: "3em 0em" }} vertical color="teal">
        <Header size="huge" textAlign="center" color="teal">
          Skills
        </Header>
        <Container fluid textAlign="center">
          <Popup
            content="CSS3"
            trigger={<Icon name="css3 alternate" size="huge" />}
          />

          <Popup content="HTML5" trigger={<Icon name="html5" size="huge" />} />

          <Popup content="React" trigger={<Icon name="react" size="huge" />} />

          <Popup
            content="JavaScript"
            trigger={<Icon className="devicon-javascript-plain" size="huge" />}
          />
		  <Popup
            content="BootStrap"
            trigger={<Icon className="devicon-bootstrap-plain" size="huge" />}
          />

          <Popup
            content="Nodejs"
            trigger={<Icon className="devicon-nodejs-plain" size="huge" />}
          />
          <Popup
            content="MongoDb"
            trigger={
              <Icon className="devicon-mongodb-plain-wordmark" size="huge" />
            }
          />

          <Popup
            content="Express"
            trigger={<Icon className="devicon-express-original" size="huge" />}
          />
          <Popup
            content="Django"
            trigger={
              <Icon className="devicon-django-plain colored" size="huge" />
            }
          />

          <Popup
            content="Postgres SQL "
            trigger={<Icon className="devicon-postgresql-plain" size="huge" />}
          />

          <Popup
            content="Python"
            trigger={<Icon className="devicon-python-plain" size="huge" />}
          />

          <Popup
            content="GitHub"
            trigger={<Icon className="devicon-github-original" size="huge" />}
          />

          <Popup
            content="SASS"
            trigger={<Icon className="devicon-sass-original" size="huge" />}
          />

          

          <Popup
            content="Canva"
            trigger={<Icon className="devicon-canva-plain" size="huge" />}
          />
        </Container>
      </Segment>
    </div>
  );
};

export default Technology;
