import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-materialize'
import Animal from './Animal.js'
import DropdownBreed from '../Dropdown/DropdownBreed.js'
// import MapView from '../MapView/MapView.js'
import './Animal.css';

//Creates a list of animals

class AnimalList extends Component {

  render() {
    return (
      <div>
        <Button className="map-view" waves='light' node='a' href='/mapView'>Map View</Button>
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

      </div>
    );
  }
}

function mapStateToProps({animal}) {
  return {
    animals: animal.animals || []
  };
}

export default connect(mapStateToProps)(AnimalList);