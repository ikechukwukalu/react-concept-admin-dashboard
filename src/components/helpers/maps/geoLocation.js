import React, {Component} from "react";
import {Circle, GoogleMap, InfoWindow, withGoogleMap} from "react-google-maps";
import canUseDOM from "can-use-dom";
import raf from "raf";

const geolocation = (
    canUseDOM && navigator.geolocation ?
        navigator.geolocation :
        ({
            getCurrentPosition(success, failure) {
                failure(`Your browser doesn't support geolocation.`);
            },
        })
);

const GeolocationGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={10}
        center={props.center}
    >
        {props.center && (
            <InfoWindow position={props.center}>
                <div>{props.content}</div>
            </InfoWindow>
        )}
        {props.center && (
            <Circle
                center={props.center}
                radius={props.radius}
                options={{
                    fillColor: 'red',
                    fillOpacity: 0.20,
                    strokeColor: 'red',
                    strokeOpacity: 1,
                    strokeWeight: 1,
                }}
            />
        )}
    </GoogleMap>
));


export default class Geolocation extends Component {

    state = {
        center: null,
        content: null,
        radius: 6000,
    };

    isUnmounted = false;

    componentDidMount() {
        const tick = () => {
            if (this.isUnmounted) {
                return;
            }
            this.setState({radius: Math.max(this.state.radius - 20, 0)});

            if (this.state.radius > 200) {
                raf(tick);
            }
        };
        geolocation.getCurrentPosition((position) => {
            if (this.isUnmounted) {
                return;
            }
            this.setState({
                center: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                },
                content: `Location found using HTML5.`,
            });

            raf(tick);
        }, (reason) => {
            if (this.isUnmounted) {
                return;
            }
            this.setState({
                center: {
                    lat: 60,
                    lng: 105,
                },
                content: `Error: The Geolocation service failed (${reason}).`,
            });
        });
    }

    componentWillUnmount() {
        this.isUnmounted = true;
    }

    render() {
        return (
            <GeolocationGoogleMap
                containerElement={
                    <div className="embed-responsive embed-responsive-21by9"/>
                }
                mapElement={<div className="embed-responsive-item"/>}
                center={this.state.center}
                content={this.state.content}
                radius={this.state.radius}
            />
        );
    }
}