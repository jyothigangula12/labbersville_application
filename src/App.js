// To display the logo and Headertext
// using grid to display the projects
// rendering project and ideas components
import React, { Component } from 'react';
import './styles/App.css';
import Project from './Project';
import Ideasandtags from './Ideasandtags'
import { Grid, Row, Col } from 'react-bootstrap';

 
var projects = require('./api/projects.json');

class App extends Component {

  generateProjects(){
    return projects.map((project,id) => {
      return(
        <Col key={id} xs={6} md={4}>
          <Project project={project}/>
        </Col>
      )  
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="img" src="/img/Labbersville.png" alt="logo" />
        <p className="App-intro">
          Welcome to the particpation platform of Labbersville. This site is dedicated to every citizen. 
          Together, we want to combine our strengths in order to collaboratively improve our city. Step by step, idea by idea, citizen by citizen! Help us out!
        </p>
        </header>
        <h1>Projects of Labbersville</h1>
        <Grid>
          <Row>
            {this.generateProjects()}
          </Row>
        </Grid>;     
        <br/>
        <h1>Trending Ideas and popular tags</h1>
         <br/>
        <Ideasandtags /> 
      </div>
    );
  }
}

export default App;
