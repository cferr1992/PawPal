import React, { Component } from 'react';

//Creates individual animal components to display in AnimalList

class Animal extends Component {

  render() {
    return (
      <div className="animal-container">
          <img className="animal-image" alt={this.props.animal.name} src={this.props.animal.imgURL} />
          <span className="animal-field">Name: {this.props.animal.name}</span>
          <span className="animal-field">Age: {this.props.animal.age}</span>
          <span className="animal-field">Breed: {this.props.animal.breed}</span>
          <span className="animal-field">Description: {this.props.animal.description}</span>
      </div>
    );
  }
}

export default Animal;