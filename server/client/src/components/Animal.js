import React, { Component } from 'react';

class Animal extends Component {

  render() {
    return (
      <div className="animal-container">
          <span className="animal-field">Category: {this.props.animal.name}</span>
         
      </div>
    );
  }
}

export default Animal;