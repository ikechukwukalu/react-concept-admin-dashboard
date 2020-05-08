import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-chart-chartist.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class Chartist extends Component {
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
                        <h2 className="pageheader-title">Chartist.js </h2>
                        <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                        <div className="page-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Charts</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Chartist.js</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Simple Line Chart</h5>
                        <div className="card-body">
                            <div className="ct-chart-line ct-golden-section"></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Holes In Data</h5>
                        <div className="card-body">
                            <div className="ct-chart-holes ct-golden-section"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Whole Numbers</h5>
                        <div className="card-body">
                            <div className="ct-chart-wnumbers ct-golden-section"></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Line Scatter Diagram With Responsive Settings</h5>
                        <div className="card-body">
                            <div className="ct-chart-scatter ct-golden-section"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Line Chart With Area</h5>
                        <div className="card-body">
                            <div className="ct-chart-area ct-golden-section"></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Bi-polar Line Chart With Area Only</h5>
                        <div className="card-body">
                            <div className="ct-chart-polar ct-golden-section"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Stacked Bar Chart</h5>
                        <div className="card-body">
                            <div className="ct-chart-scatter-bar ct-golden-section"></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Multi Line Labels</h5>
                        <div className="card-body">
                            <div className="ct-chart-multilines ct-golden-section"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Multi-line Labels</h5>
                        <div className="card-body">
                            <div className="ct-chart-bipolar ct-golden-section"></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Add Peak Circles Using The Draw Events</h5>
                        <div className="card-body">
                            <div className="ct-chart-events ct-golden-section"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Advanced Smil Animations</h5>
                        <div className="card-body">
                            <div className="ct-chart-animation ct-golden-section"></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Horizontal Chart Bar</h5>
                        <div className="card-body">
                            <div className="ct-chart-horizontal ct-golden-section"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Simple Pie Chart</h5>
                        <div className="card-body">
                            <div className="ct-chart-pie ct-golden-section"></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Donut Chart Using Fill Rather Than Stroke</h5>
                        <div className="card-body">
                            <div className="ct-chart-donut ct-golden-section"></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Animating A Donut With Svg.animate</h5>
                        <div className="card-body">
                            <div className="ct-chart-animated ct-golden-section"></div>
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

export default Chartist;