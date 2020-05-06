import React, {Component} from 'react';
import {GoogleMap, withGoogleMap,} from 'react-google-maps';


const BasicMapGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{lat: 47.646935, lng: -122.303763}}
    />
));


export default class BasicMap extends Component {

    render() {
        let styleName = this.props.styleName;
        if (!styleName) {
            styleName = 'embed-responsive-21by9'
        }
        return (
            <div>
                <BasicMapGoogleMap
                    containerElement={
                        <div className={`embed-responsive ${styleName}`}/>
                    }
                    mapElement={<div className="embed-responsive-item"/>}
                />
            </div>
        );
    }
}