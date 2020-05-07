import React, { Fragment } from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";
const HeatmapLayerMap = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCRDCjoy1Xb4I0trWMUNiZXneCziSGoMl8&libraries=visualization",
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
      <HeatmapLayer autoUpdate />
    </GoogleMap>
  );

export default HeatmapLayerMap;