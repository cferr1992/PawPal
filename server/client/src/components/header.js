import React, {Component} from 'react';
import Dropdown from './Dropdown.js';
import {Grid, Row, Col} from 'react-bootstrap';
import './Header.css';

//Header component to be displayed on every page

class Header extends Component {
    render() {
        return (
            <div className="container">
                <Grid>
                    <Row className="header show-grid">
                        <Col className="logo" xs={12} md={3}>
                            PawPal
                        </Col>
                        <Col className="dropdown" xs={12} md={6}>
                            <code>
                                <Dropdown />
                            </code>
                        </Col>
                        <Col className="sign-in" xs={12} md={3}>
                            Login/Signup
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Header;