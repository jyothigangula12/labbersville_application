//To display projects information on cards
import React, { Component } from 'react';
import './styles/Project.css'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

class Project extends Component {

  render() {
    const {title , users, description, img, ideas, startAt, endAt} = this.props.project
    return (
      <Card className = "card">
        <CardMedia
          overlay={<CardTitle title={title} />}
        >
          <img src={`/img/${img}`} alt="" />
        </CardMedia>
        <CardTitle title={title}subtitle={description} />
        <Divider className="line"/>
        <CardText className="fontweight">
          Number of active users : {users}
           <br/>
          Number of ideas : {ideas}
        </CardText>
        <Divider className="line"/>
        <CardText>
          Start date : {startAt}
           <br/>
          End date : {endAt}
        </CardText>
      </Card> 
    );
  }
}

export default Project;
