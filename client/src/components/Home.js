import React, { Component } from 'react';
import { Header, Segment, Button } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Segment>
        <Header as='h1' textAlign='center'>Park Check</Header>
        <Header as='h3' textAlign='center'>Welcome to Park Check!</Header>
        <p> Just a o ne-time quick park? No problem, we will get you on your way as quickly as possible.</p>
        <Button>Enter Car Information</Button>
        <p> Frequent user? Download the app to be efficient with your time</p>
        <Button>Take me to the App</Button>
      </Segment>
    );
  }
}

export default Home;
