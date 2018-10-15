import React, { Component } from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Row, Col } from 'react-materialize'
import GoogleMapReact from 'google-map-react';

import { fetchAnimalById } from '../../actions'

//Creates marker icon for map
const Marker = ({ text }) => <div>{text}</div>;

//Creates animal details page
class AnimalDetail extends Component {

    //Centers the map between Durham and Raleigh by default
    static defaultProps = {
        center: {
          lat: 35.942568,
          lng: -78.834405
        },
        zoom: 9
      };

    //Fetches animals by ID to display data unique to their profile
    componentDidMount() {
        this.props.fetchAnimalById(this.props.match.params.animalid);
    }

    render () {

        //Creates icon for map
        const mapIcon =  <i class="material-icons map-icon">pets</i>;

        //Creates proper route for profile pictures
        const imgRoot = "../." + this.props.details.imgURL;

        //Creates email template
        const animalEmail = "mailto:" + this.props.details.email + "?subject=Let's%20Meet!" 
            + "&body=I'm%20interested%20in%20meeting%20" + this.props.details.name 
            + ".%20When%20and%20where%20would%20you%20like%20to%20meet?";
    
        return (
            <div className="profile-container">
                <Row className="profile-row">
                    <Col s={4}>
                        <div>
                            <img className="profile-pic-img" src={imgRoot} alt="profile pic" />
                        </div>
                    </Col>
                    <Col s={4}>
                        <div className="profile-name">
                            {this.props.details.name}
                        </div>
                        <div className="profile-breed">
                            <strong>Breed: </strong>{this.props.details.breed}
                        </div>
                        <div className="profile-age">
                            <strong>Age: </strong>{this.props.details.age}
                        </div>
                        <div className="profile-description">
                            <strong>Description: </strong>{this.props.details.description}
                        </div>
                        <div className="profile-email">
                            <strong>Contact: </strong><a className="profile-email-link" href={animalEmail}>{this.props.details.email}</a>
                        </div>
                    </Col>
                    <Col s={4}>
                        <div style={{ height: '400px', width: '400px', marginTop: '20px' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: 'AIzaSyDuXHhP6RI3zijuvdtdq3oYd3OZgMHirYA' }}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                            >
                            <Marker
                                lat={this.props.details.lat}
                                lng={this.props.details.lng}
                                text={mapIcon}
                                />
                            </GoogleMapReact>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let details = state.details;
    return {details}
  }
  
  
   function mapDispatchToProps(dispatch) {
      return bindActionCreators({fetchAnimalById}, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AnimalDetail);