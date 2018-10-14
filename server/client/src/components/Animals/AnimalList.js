import React, { Component } from 'react'
import { connect } from 'react-redux'

import Animal from './Animal.js'
import DropdownBreed from '../Dropdown/DropdownBreed.js'
import './Animal.css';

//Creates a list of animals

class AnimalList extends Component {

  render() {
    return (
      <DropdownBreed>
        <div>
          <div className="animal-list-container">
            {
              this.props.animals.map(animal => 
                <Animal animal={animal} key={animal._id}/>
              )
            }
          </div>
        </div>
      </DropdownBreed>
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