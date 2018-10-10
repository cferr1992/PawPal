import React, { Component } from 'react';
import Dropdown from './Dropdown.js';
import {Grid, Row, Col} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
        <div className="container">
            <Grid>
                <Row className="header show-grid">
                    <Col className="logo" xs={12} md={3}>
                        <code>
                            PawPal
                        </code>
                    </Col>
                    <Col className="dropdown" xs={12} md={6}>
                        <code>
                            <Dropdown />
                        </code>
                    </Col>
                    <Col className="sign-in" xs={12} md={3}>
                        <code>
                            Login/Signup
                        </code>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
  }
}
export default Header;