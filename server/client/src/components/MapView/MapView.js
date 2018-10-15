import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { Button } from 'react-materialize'

import './MapView.css'

const Marker = ({ text }) => <div>{text}</div>;

class MapView extends Component {

    
    static defaultProps = {
        center: {
          lat: 35.942568,
          lng: -78.834405
        },
        zoom: 10
      };

      render () {

        const mapIcon =  <i class="material-icons map-icon">pets</i>;

        return (
            <div>
                <Button className="list-view" waves='light' node='a' href='/animals'>List View</Button>

            <div style={{ height: '500px', width: '500px', marginLeft: '33%', marginTop: '20px', marginBottom: '20px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDuXHhP6RI3zijuvdtdq3oYd3OZgMHirYA' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Marker
                        lat="36.018330"
                        lng="-78.909087"
                        text={mapIcon}
                    />
                    <Marker
                        lat="35.834742"
                        lng="-78.832850"
                        text={mapIcon}
                    />
                    <Marker
                        lat="35.941240"
                        lng="-79.021085"
                        text={mapIcon}
                    />
                    <Marker
                        lat="35.787605"
                        lng="-78.637600"
                        text={mapIcon}
                    />
                    <Marker
                        lat="35.780615"
                        lng="-78.792634"
                        text={mapIcon}
                    />
                    <Marker
                        lat="35.873231"
                        lng="-78.679638"
                        text={mapIcon}
                    />
                    <Marker
                        lat="35.958443"
                        lng="-78.939020"
                        text={mapIcon}
                    />
                    <Marker
                        lat="36.038050"
                        lng="-78.913048"
                        text={mapIcon}
                    />
                    <Marker
                        lat="36.070068"
                        lng="-79.099732"
                        text={mapIcon}
                    />
                    <Marker
                        lat="35.903772"
                        lng="-79.091335"
                        text={mapIcon}
                    />
                    <Marker
                        lat="35.656007"
                        lng="-78.835750"
                        text={mapIcon}
                    />
                    <Marker
                        lat="35.791256"
                        lng="-78.484333"
                        text={mapIcon}
                    />
                    <Marker
                        lat="36.016580"
                        lng="-78.984278"
                        text={mapIcon}
                    />
                </GoogleMapReact>
            </div>
            </div>
        )
    }
}

export default MapView;