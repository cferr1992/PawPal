import React, { Component } from 'react'
import { Col, Row } from 'react-materialize'

import '../About/About.css'
import PuppiesAndGirl from '../../pictures/PuppiesAndGirl.jpg'
import PuppyPlay1 from '../../pictures/PuppyPlay1.jpg'

//Creates About page
class About extends Component {

    render () {
        return(
            <div className="about-container">
                <Row>
                    <Col s={12} l={4}>
                        <img className="about-image" src={PuppiesAndGirl} alt="Dog and boy" />  
                    </Col>
                    <Col s={12} l={4}>
                        <div className="about-text">
                            <p>
                            Have you ever felt stressed out and wished you could play with
                            a puppy but don't have the means to own one yourself? <br/> <br/>
                            Do you have a puppy that you wish you could have socialize with 
                            other people and/or puppies? <br/> <br/>
                            Whether you are a person seeking a puppy to play with or an owner
                            seeking people/puppies to play with your puppy, PawPal is the place for you. <br/> <br/>
                            PawPal is where people and puppies come together.
                            </p>
                        </div>  
                    </Col>
                    <Col s={12} l={4}>
                        <img className="about-image" src={PuppyPlay1} alt="Puppies playing" />  
                    </Col>
                </Row>
                
            </div>
        )
    }
}

export default About;