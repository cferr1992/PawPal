import React, { Component } from 'react'
import { Button } from 'react-materialize'

import PuppyPlay1 from '../../pictures/PuppyPlay1.jpg'

import './Landing.css'

class Landing extends Component {

    render () {
        return(
            <div>
                <img className="image" src={PuppyPlay1} alt="puppies at play" />
                <div className="centered">Where People And Puppies Come Together</div>
                <Button className="centered-below" waves='light' node='a' href='/signup'>Get started</Button>
                <a href="/animals/detail">Go to profile</a>
            </div>
        )
    }
}

export default Landing;