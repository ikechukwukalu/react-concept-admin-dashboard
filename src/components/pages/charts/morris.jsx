import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-chart-morris';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class Morris extends Component {
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
                          <h2 className="pageheader-title">Morris.js </h2>
                          <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                          <div className="page-breadcrumb">
                              <nav aria-label="breadcrumb">
                                  <ol className="breadcrumb">
                                      <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                      <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Charts</a></li>
                                      <li className="breadcrumb-item active" aria-current="page">Morris.js</li>
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
                              <div id="morris_area"></div>
                          </div>
                      </div>
                  </div>
                  
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="card">
                          <h5 className="card-header">Line Chart</h5>
                          <div className="card-body">
                              <div id="morris_line"></div>
                          </div>
                      </div>
                  </div>
                  
              </div>
              <div className="row">
                  
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="card">
                          <h5 className="card-header">Bar Chart</h5>
                          <div className="card-body">
                              <div id="morris_bar"></div>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="card">
                          <h5 className="card-header">Stacked Bars </h5>
                          <div className="card-body">
                              <div id="morris_stacked"></div>
                          </div>
                      </div>
                  </div>
                  
              </div>
              <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="card">
                          <h5 className="card-header">Updating data </h5>
                          <div className="card-body">
                              <div id="morris_udateing"></div>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="card">
                          <h5 className="card-header">Donut Chart </h5>
                          <div className="card-body">
                              <div id="morris_donut"></div>
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

export default Morris;