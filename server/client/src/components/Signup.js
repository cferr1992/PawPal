import React, { Component } from 'react'
import { Row, Input } from 'react-materialize'

class Signup extends Component {
    render () {
        return (
            <div>
                <Row>
                    <Input placeholder="First Name" s={6} label="First Name" />
                    <Input placeholder="Last Name" s={6} label="Last Name" />
                    <Input placeholder="Pet's name" s={6} label="Pet's Name" />
                    <Input placeholder="Pet's breed" s={6} label="Pet's Breed" />
                    <Input type="date" label="Pet's Date of Birth" s={12} />
                    <Input placeholder="Description" s={12} label="Description" />
                    <Input type="password" label="Password" s={12} />
                    <Input type="email" label="Email" s={12} />
                    <Input type="file" label="Upload Pet's Picture" s={12} />
                </Row>
            </div>
        )
    }

}

export default Signup;