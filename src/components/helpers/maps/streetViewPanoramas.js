import React from "react";
import { FaAnchor } from 'react-icons/fa';
import { withScriptjs, withGoogleMap, GoogleMap, StreetViewPanorama, OverlayView } from "react-google-maps";
import { compose, withProps } from "recompose";

const getPixelPositionOffset = (width, height) => ({
    x: -(width / 2),
    y: -(height / 2),
});

const StreetViewPanormaMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCRDCjoy1Xb4I0trWMUNiZXneCziSGoMl8&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 49.2853171, lng: -123.1119202 },
  }),
  withScriptjs,
  withGoogleMap
)( (props) =>
    <GoogleMap defaultZoom={8} defaultCenter={props.center}>
        <StreetViewPanorama defaultPosition={props.center} visible>
            <OverlayView
                position={{ lat: 49.28590291211115, lng: -123.11248166065218 }}
                mapPaneName={OverlayView.OVERLAY_LAYER}
                getPixelPositionOffset={getPixelPositionOffset}
            >
                <div style={{ background: `red`, color: `white`, padding: 5, borderRadius: `50%` }}>
                OverlayView
                </div>
            </OverlayView>
        </StreetViewPanorama>
    </GoogleMap>
);

export default StreetViewPanormaMap;