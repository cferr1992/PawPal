import React, { Component } from 'react';

import { Card, CardTitle } from 'react-materialize';

//Creates individual animal components to display in AnimalList

class Animal extends Component {

  render() {
    return (
      <div className="animal-container">
        <Card className="animal-card"
          header={<CardTitle 
            image={this.props.animal.imgURL}
            waves='light'/>}
            title={this.props.animal.name}
            reveal={this.props.animal.description}>
          <p>Go to profile</p>
        </Card>
      </div>
    );
  }
}

export default Animal;