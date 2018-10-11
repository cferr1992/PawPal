import React, { Component } from 'react';
import { connect } from "react-redux"

import Animal from './Animal.js';
import './Animal.css';

//Creates a list of animals

class AnimalList extends Component {

  render() {
    return (
      <div className="animal-list-container">
        <div>
          {
            this.props.animals.map(animal => 
              <Animal animal={animal} key={animal._id}/>
            )
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps({animal}) {
  console.log(animal);
  return {
    animals: animal.animals || []
  };
}

export default connect(mapStateToProps)(AnimalList);