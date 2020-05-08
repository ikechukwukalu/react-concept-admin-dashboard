import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-chart-gauge.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class Gauge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
      path: this.props.location.pathname,
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
        <div className="container-fluid  dashboard-content">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="page-header">
                        <h2 className="pageheader-title">Gauge</h2>
                        <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                        <div className="page-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Charts</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Gauge</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
           
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Gauge#1</h5>
                            <div className="card-body">
                                <canvas id="gauge1"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Gauge#2</h5>
                            <div className="card-body">
                                <canvas id="gauge2"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Gauge#3</h5>
                            <div className="card-body">
                                <canvas id="gauge3"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Gauge#4</h5>
                            <div className="card-body">
                                <canvas id="gauge4"></canvas>
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

export default Gauge;