import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  maxWidth: '574.5px',
  maxHeight: '350px',
  height: 'auto',
  width: 'auto'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCRDCjoy1Xb4I0trWMUNiZXneCziSGoMl8'
})(MapContainer);