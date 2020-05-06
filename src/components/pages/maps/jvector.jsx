import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';

import Scripts from '../../scripts/scripts-map-jvector.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class JvectorMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      path: window.location.pathname,
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
  
  render() {
    return (
        <Fragment>
        <div className="container-fluid dashboard-content">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="page-header">
                        <h2 className="pageheader-title">Vector Map </h2>
                        <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                        <div className="page-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Maps</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Vector Map</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">World Map</h5>
                        <div className="card-body">
                            <div id="world-map-markers" style={{height: "450px"}}></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">India</h5>
                        <div className="card-body">
                            <div id="india" style={{height: "450px"}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">USA</h5>
                        <div className="card-body">
                            <div id="usa" style={{height: "450px"}}></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Australia Map</h5>
                        <div className="card-body">
                            <div id="australia" style={{height: "450px"}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Uk Map</h5>
                        <div className="card-body">
                            <div id="uk" style={{height: "450px"}}></div>
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

export default JvectorMap;