import React, {Component} from "react";
import {GoogleMap, TrafficLayer, withGoogleMap} from "react-google-maps";

const TrafficLayerGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{lat: 47.646935, lng: -122.303763}}
    >
        <TrafficLayer autoUpdate/>
    </GoogleMap>
));


export default class TrafficMap extends Component {

    render() {
        return (
            <TrafficLayerGoogleMap
                containerElement={
                    <div className="embed-responsive embed-responsive-21by9"/>
                }
                mapElement={<div className="embed-responsive-item"/>}
            />
        );
    }
}