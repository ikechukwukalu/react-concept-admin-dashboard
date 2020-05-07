import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-basic.js';

import {ActiveLinkIds} from '../../helpers/active-links.js';

import BasicMap from '../../helpers/maps/basicMap.js';
import GeoFencesMap from '../../helpers/maps/GeoFencesMap.js';
import PolygonMap from '../../helpers/maps/polygonMap.js';
import PolylineMap from '../../helpers/maps/polylineMap.js';
import KmlLayerMap from '../../helpers/maps/kmlLayerMap.js';
import FusionTableLayerMap from '../../helpers/maps/FusionTableLayerMap.js';
import MapEvent from '../../helpers/maps/mapEvent.js';
import StreetViewPanormaMap from '../../helpers/maps/streetViewPanoramas.js';
import TrafficLayerMap from '../../helpers/maps/TrafficLayerMap.js';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      basename: this.props.basename,
      path: this.props.basename.length > 0 ? window.location.pathname.trim().replace('/'+this.props.basename, '') : window.location.pathname.trim(),
      active_links: ActiveLinkIds
    }
  }

  componentDidMount() {
      if(typeof this.state.active_links[this.state.path] == 'object') {
        this.state.active_links[this.state.path].map(el => {
            $('#'+el).addClass('active');
        });
        
      }
  }

  componentWillUnmount() {
    $("head").find('script').remove(); 
    if(typeof this.state.active_links[this.state.path] == 'object') {
      this.state.active_links[this.state.path].map(el => {
          $('#'+el).removeClass('active');
      });
    }
  }
  
  handleMarkerClick = () => {
      alert('This marker was clicked');
  }
  
  handleMarkerDrag = () => {
      alert('Dragend');
  }
  
  render() {
    return (
        <Fragment>
        <div className="container-fluid dashboard-content">    
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="page-header">
                        <h2 className="pageheader-title">Google Map </h2>
                        <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                        <div className="page-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Maps</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Google Map</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Basic Map</h5>
                        <div className="card-body">
                            <div id="map" className="gmaps">
                                <BasicMap />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    
                    <div className="card">
                        <h5 className="card-header">Map Events</h5>
                        <div className="card-body">
                            <div id="map_1" className="gmaps">
                                <MapEvent />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    
                    <div className="card">
                        <h5 className="card-header">Markers</h5>
                        <div className="card-body">
                            <div id="map_2" className="gmaps">
                                <BasicMap isMarkerShown onMarkerClick={this.handleMarkerClick} />
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    
                    <div className="card">
                        <h5 className="card-header">Polylines</h5>
                        <div className="card-body">
                            <div id="map_3" className="gmaps">
                                <PolylineMap />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="row">
                
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Polygons</h5>
                        <div className="card-body">
                            <div id="map_4" className="gmaps">
                                <PolygonMap />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Routes</h5>
                        <div className="card-body">
                            <div id="map_5" className="gmaps">
                                <BasicMap />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="row">
                
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Routes Advance</h5>
                        <div className="card-body">
                            <div id="map_6" className="gmaps">
                                <BasicMap />
                            </div>
                            <a href="#" id="start_travel" className="btn btn-primary m-t-20">start</a>
                            <ul id="instructions">
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Street View Panoramas</h5>
                        <div className="card-body">
                            <div id="panorama" className="gmaps">
                                <StreetViewPanormaMap />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="row">
                
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Traffic Layer Map</h5>
                        <div className="card-body">
                            <div id="map_7" className="gmaps">
                                <TrafficLayerMap />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Fusion Tables layers</h5>
                        <div className="card-body">
                            <div id="map_8" className="gmaps">
                                <FusionTableLayerMap />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="row">
                
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">KML layers</h5>
                        <div className="card-body">
                            <div id="map_9" className="gmaps">
                                <KmlLayerMap />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Geofences</h5>
                        <div className="card-body">
                            <div id="map_10" className="gmaps">
                                <GeoFencesMap isMarkerShown />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
            <Scripts base_url={this.state.base_url} />
        </Fragment>
    );
  }
}

export default GoogleMap;