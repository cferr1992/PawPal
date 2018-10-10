import React, { Component } from 'react';
import { connect } from "react-redux"

import { fetchAnimals } from '../actions/index.js'
import Animal from './Animal.js';

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