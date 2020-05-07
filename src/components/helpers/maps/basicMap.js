import React, { Fragment } from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

 const BasicMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCRDCjoy1Xb4I0trWMUNiZXneCziSGoMl8&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)( (props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {
        props.isMarkerShown 
            && 
        <Fragment>
            <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />
            <Marker position={{ lat: -34.297, lng: 150.544 }} onClick={props.onMarkerClick} />
        </Fragment>
    }
  </GoogleMap>
);
export default BasicMap;