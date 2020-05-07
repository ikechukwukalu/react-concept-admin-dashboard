import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

import Scripts from '../../scripts/scripts-chart-sparkline.js';
import {ActiveLinkIds} from '../../helpers/active-links.js';

class Sparkline extends Component {
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
  
  render() {
    return (
        <Fragment>
        <div className="container-fluid  dashboard-content">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="page-header">
                        <h2 className="pageheader-title">Sparkline </h2>
                        <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                        <div className="page-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Charts</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Sparkline</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Bar Chart</h5>
                            <div className="card-body">
                                <div id="sparkline1" className="spark-chart"></div>
                                <div className="spark-chart-info">
                                    <h5 className="mb-0">Sales</h5>
                                    <p>70%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Line Chart</h5>
                            <div className="card-body">
                                <div id="sparkline2" className="spark-chart"></div>
                                <div className="spark-chart-info">
                                    <h5 className="mb-0">Sales</h5>
                                    <p>70%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Discrete</h5>
                            <div className="card-body">
                                <div id="sparkline3" className="spark-chart"></div>
                                <div className="spark-chart-info">
                                    <h5 className="mb-0">Sales</h5>
                                    <p>70%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Line Chart</h5>
                            <div className="card-body">
                                <div id="sparkline4" className="spark-chart"></div>
                                <div className="spark-chart-info">
                                    <h5 className="mb-0">Sales</h5>
                                    <p>70%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Compositebar Line Chart</h5>
                            <div className="card-body">
                                <div id="compositebar" className="spark-chart"></div>
                                <div className="spark-chart-info">
                                    <h5 className="mb-0">Sales</h5>
                                    <p>70%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Bullet Chart</h5>
                            <div className="card-body">
                                <div id="sparkline5" className="spark-chart"></div>
                                <div className="spark-chart-info">
                                    <h5 className="mb-0">Sales</h5>
                                    <p>70%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">PieChart</h5>
                            <div className="card-body">
                                <div id="sparkline6" className="spark-chart"></div>
                                <div className="spark-chart-info">
                                    <h5 className="mb-0">Sales</h5>
                                    <p>70%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6    col-md-6 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Box Plot</h5>
                            <div className="card-body">
                                <div id="sparkline7" className="spark-chart"></div>
                                <div className="spark-chart-info">
                                    <h5 className="mb-0">Sales</h5>
                                    <p>70%</p>
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

export default Sparkline;