import React, { Fragment } from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, FusionTablesLayer  } from "react-google-maps"

const FusionTableLayerMap = compose(
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
      defaultZoom={11}
      defaultCenter={{ lat: 41.850033, lng: -87.6500523 }}
    >
      <FusionTablesLayer
        url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
        options={{
          query: {
            select: `Geocodable address`,
            from: `1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg`
          }
        }}
      />
    </GoogleMap>
  );
export default FusionTableLayerMap;