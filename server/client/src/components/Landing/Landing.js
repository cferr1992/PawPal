import React, { Component } from 'react'
import { Button } from 'react-materialize'

import './Landing.css'
import DogAndBoy from '../../pictures/DogAndBoy.jpg'

//Creates landing/home page
class Landing extends Component {

    render () {
        return(
            <div>
                <img className="image" src={DogAndBoy} alt="dog and boy" />
                <div className="centered">Where People And Puppies Come Together</div>
                <Button className="centered-below" waves='light' node='a' href='/signup'>Get started</Button>
            </div>
        )
    }
}

export default Landing;