import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 36.018330,
      lng: -78.909087
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '500px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDuXHhP6RI3zijuvdtdq3oYd3OZgMHirYA' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={36.018330}
            lng={-78.909087}
            text={'Hello World'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;