import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Button, Card, CardTitle } from 'react-materialize'
import './Animal.css'

//Creates individual animal components to display in AnimalList

class Animal extends Component {

  render() {

const animalAge = this.props.animal.age;
const animalBreed = this.props.animal.breed;
const animalDescription = this.props.animal.description;
const animalEmail = this.props.animal.email;

    return (
      <div className="animal-container">
        <Card className="small animal-card"
          header={<CardTitle 
            image={this.props.animal.imgURL}
            waves='light'/>}
            title={this.props.animal.name}
            reveal={<div>
                      <div className="circle-pic-container">
                      <img className="circle-pic circle responsive-img" src={this.props.animal.imgURL} alt="profile pic" />
                      </div>
                      <div className="animal-age">
                        <strong>Age: </strong>{animalAge}
                      </div>
                      <div className="animal-breed">
                        <strong>Breed: </strong>{animalBreed}
                      </div>
                      <div className="animal-description">
                        <strong>Description: </strong> {animalDescription}
                      </div>
                      <div className="animal-email">
                        {/* <strong>Contact: </strong> {animalEmail} */}
                        <Button floating large className='red' waves='light' icon='email' />
                      </div>
                    </div>}>
                    <div>
                      <Link to = {`/animals/detail`} id = "details" className="details">
                        Profile
                      </Link>
                    </div>
        </Card>
      </div>
    );
  }
}

export default Animal;