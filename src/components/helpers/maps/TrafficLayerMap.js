import React, { Fragment } from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, TrafficLayer } from "react-google-maps"

const TrafficLayerMap = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCRDCjoy1Xb4I0trWMUNiZXneCziSGoMl8&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `100%` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 41.9, lng: -87.624 }}
    >
      <TrafficLayer autoUpdate />
    </GoogleMap>
  );

export default TrafficLayerMap;