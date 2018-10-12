import React, { Component } from 'react'

import PuppyPlay from './PuppyPlay.jpg'

import './Landing.css'

class Landing extends Component {

    render () {
        return(
            <div>
                <img className="image" src={PuppyPlay} alt="puppies at play" />
            </div>
        )
    }
}

export default Landing;