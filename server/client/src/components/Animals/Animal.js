import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardTitle } from 'react-materialize'

import './Animal.css'

//Creates individual animal components to display in AnimalList
class Animal extends Component {

  render() {

    //Setup variables for animal details
    const animalAge = this.props.animal.age;
    const animalBreed = this.props.animal.breed;
    const animalDescription = this.props.animal.description;

    //Email template
    const animalEmail = "mailto:" + this.props.animal.email + "?subject=Let's%20Meet!" 
      + "&body=I'm%20interested%20in%20meeting%20" + this.props.animal.name 
      + ".%20When%20and%20where%20would%20you%20like%20to%20meet?";

    return (
      <div className="animal-container">
        {/* Creates individual animal cards */}
        <Card className="small animal-card"
          header={<CardTitle 
            image={this.props.animal.imgURL}
            waves='light'/>}
            title={this.props.animal.name}
            reveal={<div>
              <div className="circle-pic-container">
                <a href={"/animals/detail/" + this.props.animal._id}>
                <img className="circle-pic circle responsive-img" src={this.props.animal.imgURL} alt="profile pic" /></a>
              </div>
              <div className="animal-age">
                <strong>Age: </strong>{animalAge}
              </div>
              <div className="animal-breed">
                <strong>Breed: </strong>{animalBreed}   
              </div>
              <div className="animal-descripti0on">
                <strong>Description: </strong> {animalDescription}
              </div>
              <div className="animal-email">
                <a href={animalEmail}><Button floating large className='red email-button' waves='light' icon='email' /></a>
              </div>
            </div>}>
            <p>
              <Link to = {`/animals/detail/` + this.props.animal._id} id = "details" className="details">
                Profile
              </Link>
            </p>
        </Card>
      </div>
    );
  }
}

export default Animal;