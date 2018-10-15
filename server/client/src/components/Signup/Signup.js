import React, { Component } from 'react'
import { Row, Input } from 'react-materialize'

class Signup extends Component {
    render () {
        return (
            <div className="signup-container">
                <Row className="signup-container">
                    <Input placeholder="First Name" s={6} label="First Name" />
                    <Input placeholder="Last Name" s={6} label="Last Name" />
                    <Input type="password" label="Password" s={12} />
                    <Input type="email" label="Email" s={12} />
                    <Input placeholder="Pet's name" s={6} label="Pet's Name" />
                    <Input s={6} type='select' label="Select a Breed" defaultValue='15'>
                        <option value="15">Select a Breed</option>
                        <option value='1'>Beagle</option>
                        <option value='2'>Boxer</option>
                        <option value='3'>Bulldog</option>
                        <option value='4'>Corgi</option>
                        <option value='5'>Dachshund</option>
                        <option value='6'>German Shepherd</option>
                        <option value='7'>Golden Retriever</option>
                        <option value='8'>Husky</option>
                        <option value='9'>Labrador Retriever</option>
                        <option value='10'>Poodle</option>
                        <option value='11'>Pug</option>
                        <option value='12'>Rottweiler</option>
                        <option value='13'>Terrier</option>
                        <option value='14'>Other</option>
                    </Input>
                    <Input type="date" label="Pet's Date of Birth" s={6} />
                    <Input type="file" label="Upload Pet's Picture" s={6} />
                    <Input placeholder="Description" s={12} label="Description" />
                </Row>
            </div>
        )
    }

}

export default Signup;