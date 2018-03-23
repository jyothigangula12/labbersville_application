// to display ideas and tags in separate lists
import React, { Component } from 'react';
import './styles/Ideasandtags.css'
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import {pinkA200} from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';
import MobileTearSheet from './MobileTearSheet';
import MobileTearSheet1 from './MobileTearSheet1';

var tags = require('./api/tags.json');

var trending = require('./api/trending_ideas.json');

class Ideasandtags extends Component {
// it displays ideas listitem
  generateIdeas(){
    return trending.map((idea,id) => {
      const {title, body, icon} = idea
      return(
        <div key={id}>
          <ListItem
            key={id}
            primaryText={title}
            leftIcon={<i className="material-icons red900">lightbulb_outline</i>}
            disabled={true}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText={body} leftIcon={<i className="material-icons">{icon}</i>} />,
            ]}
          />
          <Divider />
        </div>  
      )  
    })
  }
  generateTags(){
  // it displays tags listitem  
    tags.sort(function(a, b) {
      return b.score - a.score;
    });
    tags.splice(5, tags.length);
    return tags.map((tag, id) => {
      const {label} = tag
      return(
        <div key={id}>
          <ListItem
            primaryText={label}
            leftIcon={<ActionGrade color={pinkA200} />}
          />
          <Divider />
        </div>  
      )  
    })
  }
  render() {
    return (
      <div>
        <MobileTearSheet1 className="right">
          <List>
            <Subheader className = "Subheader1">Popular tags</Subheader>
            {this.generateTags()}
          </List>
        </MobileTearSheet1>
        <MobileTearSheet>
          <List>
            <Subheader className = "Subheader">Trending ideas</Subheader>
            {this.generateIdeas()}
          </List>
        </MobileTearSheet>  
      </div>  
    );
  }
}
 
export default Ideasandtags;

 