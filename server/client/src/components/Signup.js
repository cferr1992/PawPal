import React, { Component } from 'react'
import { Row, Input } from 'react-materialize'

class Signup extends Component {
    render () {
        return (
            <div>
                <Row>
                    <Input placeholder="First Name" s={6} label="First Name" />
                    <Input placeholder="Last Name" s={6} label="Last Name" />
                    <Input type="password" label="password" s={12} />
                    <Input type="email" label="Email" s={12} />
                </Row>
            </div>
        )
    }

}

export default Signup;