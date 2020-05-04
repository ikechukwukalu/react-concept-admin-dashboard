import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-chart-c3.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class C3 extends Component {
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
        <div className="container-fluid  dashboard-content">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="page-header">
                        <h2 className="pageheader-title">C3 Charts </h2>
                        <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                        <div className="page-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Charts</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">C3 Charts</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Area Chart</h5>
                        <div className="card-body">
                            <div id="c3chart_area"></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Spline Chart</h5>
                        <div className="card-body">
                            <div id="c3chart_spline"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Zoom Chart</h5>
                        <div className="card-body">
                            <div id="c3chart_zoom"></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Scatter Plot</h5>
                        <div className="card-body">
                            <div id="c3chart_scatter"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Stacked Bar </h5>
                        <div className="card-body">
                            <div id="c3chart_stacked"></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Combination Chart </h5>
                        <div className="card-body">
                            <div id="c3chart_combine"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Pie Chart </h5>
                        <div className="card-body">
                            <div id="c3chart_pie"></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Donut Chart </h5>
                        <div className="card-body">
                            <div id="c3chart_donut"></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card">
                        <h5 className="card-header">Donut Guage </h5>
                        <div className="card-body">
                            <div id="c3chart_gauge"></div>
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

export default C3;